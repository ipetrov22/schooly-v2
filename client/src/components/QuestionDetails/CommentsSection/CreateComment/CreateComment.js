import { useState } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../../actions/questionActions';
import './CreateComment.scss';

const CreateComment = ({ firebaseUser, question, createComment }) => {
    const [comment, setComment] = useState('');

    const onPostComment = async () => {
        if (comment.length > 0 && firebaseUser) {
            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await createComment({ content: comment, questionId: question._id }, idToken);
                    setComment('');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <section className="create-comment-container">
            <textarea
                className="comment-input"
                placeholder="Comment..."
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />

            <button className="comment-btn" onClick={onPostComment}>Comment</button>
        </section>
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser,
    question: state.question.question
});

const mapDispatchToProps = {
    createComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);