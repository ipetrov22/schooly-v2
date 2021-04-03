import { MdSchool } from 'react-icons/md';
import './AskForm.scss';

const AskForm = () => {
    return (
        <div className="question-form-wrapper">
            <form className="form">
                <article className="icon-container">
                    <MdSchool size={'45px'} />
                </article>

                <h2 className="title">Ask a Question</h2>

                <div className="form-control">
                    <label className="input-label" htmlFor="title">Title</label>

                    <div className="input-field-container">
                        <input className="input-field" htmlFor="title" name="title" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AskForm;