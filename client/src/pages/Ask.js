import { useEffect } from 'react';
import AskForm from '../components/QuestionForms/AskForm';

const Ask = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="ask-page">
            <AskForm />
        </div>
    );
};

export default Ask;
