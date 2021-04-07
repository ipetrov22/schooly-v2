import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import { deleteComment } from '../../../../actions/questionActions';
import './CommentsList.scss';

const CommentsList = ({ question, firebaseUser, userId, deleteComment }) => {
    return (
        <section className="comments-list-container">
            {
                question.comments.map(x => (
                    <CommentCard
                        key={x._id}
                        comment={x}
                        firebaseUser={firebaseUser}
                        userId={userId}
                        deleteComment={deleteComment}
                        questionId={question._id}
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

const mapDispatchToProps = {
    deleteComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);