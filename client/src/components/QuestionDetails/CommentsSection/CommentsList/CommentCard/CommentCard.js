import { FaUserCircle } from 'react-icons/fa';
import transformDate from '../../../../../helpers/transformDate';
import './CommentCard.scss';

const CommentCard = ({ comment }) => {
    return (
        <article className="comment-card">
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