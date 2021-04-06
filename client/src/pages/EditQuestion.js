import { useEffect } from 'react';
import EditForm from '../components/QuestionForms/EditForm';

const EditQuestion = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="ask-page">
            <EditForm  {...props} />
        </div>
    );
};

export default EditQuestion;
