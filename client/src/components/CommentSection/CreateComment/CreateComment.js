import './CreateComment.scss';

const CreateComment = () => {
    return (
        <section className="create-comment-container">
            <textarea
                className="comment-input"
                placeholder="Comment..."
            />

            <button className="comment-btn">Comment</button>
        </section>
    );
};

export default CreateComment;