import { FaUserCircle } from 'react-icons/fa';
import './CommentCard.scss';

const CommentCard = () => {
    return (
        <article className="comment-card">
            <section className="icon-container">
                <FaUserCircle size="25px" />
            </section>

            <section className="content-container">
                <p className="author">user1234</p>

                <p className="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                </p>

                <p className="date">27/03/2021, 14:10:59</p>
            </section>
        </article>
    );
};

export default CommentCard;