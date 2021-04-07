import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import './CommentsList.scss';

const CommentsList = ({ question, firebaseUser, userId }) => {
    return (
        <section className="comments-list-container">
            {
                question.comments.map(x => (
                    <CommentCard
                        key={x._id}
                        comment={x}
                        firebaseUser={firebaseUser}
                        userId={userId}
                    />
                ))
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    question: state.question.question,
    firebaseUser: state.user.firebaseUser,
    userId: state.user._id
});

export default connect(mapStateToProps, null)(CommentsList);