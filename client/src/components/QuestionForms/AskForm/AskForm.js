import { MdSchool } from 'react-icons/md';
import subjects from '../../../dictionaries/subjects';
import grades from '../../../dictionaries/grades';
import questionValidators from '../../../helpers/questionValidators';
import { useState } from 'react';
import '../QuestionForm.scss';

const AskForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        grade: '',
        description: ''
    });

    const [formErrors, setFormErrors] = useState({
        title: null,
        subject: null,
        grade: null,
        description: null
    });

    const onFormChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value.trim();

        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);

        const newFormErrors = { ...formErrors };
        newFormErrors[fieldName] = questionValidators[fieldName](fieldValue);
        setFormErrors(newFormErrors);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (formErrors.title === ''
            && formErrors.subject === ''
            && formErrors.grade === ''
            && formErrors.description === '') {
            console.log(formData)
        }
    };

    return (
        <div className="question-form-wrapper">
            <form className="form" onSubmit={onFormSubmit}>
                <article className="icon-container">
                    <MdSchool size={'45px'} />
                </article>

                <h2 className="title">Ask a Question</h2>

                <div className="form-control">
                    <input
                        className={`input-field ${formErrors.title ? 'invalid-field' : ''}`}
                        htmlFor="title"
                        name="title"
                        placeholder="Title"
                        onChange={onFormChange}
                    />
                    <label className={`input-label ${formErrors.title ? 'invalid-label' : ''}`}
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <p className="error-text">{formErrors.title}</p>
                </div>

                <div className="form-control">
                    <select
                        name="subject"
                        className={`input-field ${formErrors.subject ? 'invalid-field' : ''}`}
                        placeholder="Subject"
                        onChange={onFormChange}
                    >
                        <option className="option-field" defaultValue="">Select a subject</option>
                        {
                            Object.keys(subjects)
                                .map(key => (
                                    <option key={key} className="option-field" value={key}>{subjects[key]}</option>)
                                )
                        }
                    </select>

                    <label
                        className={`input-label ${formErrors.subject ? 'invalid-label' : ''}`}
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <p className="error-text">{formErrors.subject}</p>
                </div>

                <div className="form-control">
                    <select
                        name="grade"
                        className={`input-field ${formErrors.grade ? 'invalid-field' : ''}`}
                        placeholder="Grade"
                        onChange={onFormChange}
                    >
                        <option className="option-field" defaultValue="">Select grade</option>
                        {
                            Object.keys(grades)
                                .map(key => (
                                    <option key={key} className="option-field" value={key}>{grades[key]}</option>)
                                )
                        }
                    </select>

                    <label
                        className={`input-label ${formErrors.grade ? 'invalid-label' : ''}`}
                        htmlFor="grade"
                    >
                        Grade
                    </label>
                    <p className="error-text">{formErrors.grade}</p>
                </div>

                <div className="form-control">
                    <textarea
                        className={`input-field input-area ${formErrors.description ? 'invalid-field' : ''}`}
                        htmlFor="description"
                        name="description"
                        placeholder="Description"
                        onChange={onFormChange}
                    />
                    <label
                        className={`input-label ${formErrors.description ? 'invalid-label' : ''}`}
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <p className="error-text">{formErrors.description}</p>
                </div>

                <button className="submit-btn" type="submit">
                    Post your question
                </button>
            </form>
        </div>
    );
};

export default AskForm;