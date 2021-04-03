import { MdSchool } from 'react-icons/md';
import './AskForm.scss';

const AskForm = () => {
    return (
        <div className="question-form-wrapper">
            <form className="form">
                <article className="icon-container">
                    <MdSchool size={'35px'} />
                </article>
            </form>
        </div>
    );
};

export default AskForm;