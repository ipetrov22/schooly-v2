import QuestionCard from '../QuestionCard/QuestionCard';
import './QuestionList.scss';

const QuestionList = () => {
    return (
        <div className="question-list">
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
        </div>
    );
};

export default QuestionList;