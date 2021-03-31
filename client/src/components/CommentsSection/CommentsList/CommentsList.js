import CommentCard from './CommentCard';
import './CommentsList.scss';

const CommentsList = () => {
    return (
        <section className="comments-list-container">
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </section>
    );
};

export default CommentsList;