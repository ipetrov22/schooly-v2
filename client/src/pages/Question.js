import QuestionDetails from '../components/QuestionDetails';

const Question = (props) => {
    return (
        <div className="question-page">
            <QuestionDetails {...props} />
        </div>
    );
};

export default Question;