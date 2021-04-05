import { useEffect } from 'react';
import QuestionDetails from '../components/QuestionDetails';

const Question = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="question-page">
            <QuestionDetails {...props} />
        </div>
    );
};

export default Question;