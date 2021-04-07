import { FaUserCircle } from 'react-icons/fa';
import transformDate from '../../../../../helpers/transformDate';
import { MdDelete } from 'react-icons/md';
import './CommentCard.scss';

const CommentCard = ({ comment, firebaseUser, userId }) => {
    return (
        <article className="comment-card">
            {
                userId === comment.author._id ?
                    <section className="comment-manage-container">
                        <button className="manage-btn" >
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