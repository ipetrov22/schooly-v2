import './CommentSection.scss';

const CommentSection = () => {

    return (
        <div className="comment-section-wrapper">
            <h2 className="title">Comments</h2>

            <textarea
                className="comment-input"
                placeholder="Comment..."
            />
        </div>
    );
};

export default CommentSection;