import { FaUserCircle } from 'react-icons/fa';
import transformDate from '../../../../../helpers/transformDate';
import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { NotificationContext } from '../../../../../contexts/NotificationContext';
import './CommentCard.scss';

const CommentCard = ({ comment, firebaseUser, userId, deleteComment, questionId }) => {
    const { setNotification } = useContext(NotificationContext);

    const onDelete = () => {
        if (firebaseUser) {
            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await deleteComment({ questionId }, comment._id, idToken);
                    setNotification({ message: 'Comment deleted.', type: 'success' });
                })
                .catch((err) => setNotification({ message: err, type: 'error' }));
        }
    };

    return (
        <article className="comment-card">
            {
                userId === comment.author._id ?
                    <section className="comment-manage-container">
                        <button className="manage-btn" onClick={onDelete} >
                            <MdDelete size="25px" fill="#ff0000" />
                        </button>
                    </section>
                    :
                    null
            }

            <section className="icon-container">
                <FaUserCircle size="25px" />
            </section>

            <section className="content-container">
                <p className="author">{comment.author.username}</p>

                <p className="comment-content">
                    {comment.content}
                </p>

                <p className="date">{transformDate(comment.date)}</p>
            </section>
        </article>
    );
};

export default CommentCard;