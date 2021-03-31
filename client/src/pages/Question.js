import QuestionDetails from '../components/QuestionDetails';
import CommentSection from '../components/CommentSection';

const Question = () => {
    return (
        <div className="question-page">
            <QuestionDetails />

            <CommentSection />
        </div>
    );
};

export default Question;