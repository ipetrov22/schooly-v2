import CreateComment from './CreateComment';
import CommentsList from './CommentsList';
import './CommentsSection.scss';

const CommentsSection = () => {

    return (
        <div className="comment-section-wrapper">
            <h2 className="title">Comments</h2>

            <CreateComment />

            <CommentsList/>
        </div>
    );
};

export default CommentsSection;