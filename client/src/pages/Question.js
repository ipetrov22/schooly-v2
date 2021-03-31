import QuestionDetails from '../components/QuestionDetails';
import CommentsSection from '../components/CommentsSection';

const Question = () => {
    return (
        <div className="question-page">
            <QuestionDetails />

            <CommentsSection />
        </div>
    );
};

export default Question;