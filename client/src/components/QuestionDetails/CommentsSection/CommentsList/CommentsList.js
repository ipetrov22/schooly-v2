import { connect } from 'react-redux';
import CommentCard from './CommentCard';
import './CommentsList.scss';

const CommentsList = ({ question }) => {
    return (
        <section className="comments-list-container">
            {
                question.comments.map(x => <CommentCard key={x._id} comment={x} />)
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    question: state.question.question
});

export default connect(mapStateToProps, null)(CommentsList);