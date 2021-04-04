import { MdSchool } from 'react-icons/md';
import subjects from '../../../dictionaries/subjects';
import grades from '../../../dictionaries/grades';
import { useState } from 'react';
import './AskForm.scss';

const AskForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        grade: '',
        description: ''
    });

    const onFormChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value.trim();

        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (formData.title !== ''
            && formData.subject !== ''
            && formData.grade !== ''
            && formData.grade !== '') {
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
                    <input className="input-field" htmlFor="title" name="title" placeholder="Title" onChange={onFormChange} />
                    <label className="input-label" htmlFor="title">Title</label>
                </div>

                <div className="form-control">
                    <select name="subject" className="input-field" placeholder="Subject" onChange={onFormChange} >
                        <option className="option-field" defaultValue="">Select a subject</option>
                        {
                            Object.keys(subjects)
                                .map(key => (
                                    <option key={key} className="option-field" value={key}>{subjects[key]}</option>)
                                )
                        }
                    </select>

                    <label className="input-label" htmlFor="subject">Subject</label>
                </div>

                <div className="form-control">
                    <select name="grade" className="input-field" placeholder="Grade" onChange={onFormChange} >
                        <option className="option-field" defaultValue="">Select grade</option>
                        {
                            Object.keys(grades)
                                .map(key => (
                                    <option key={key} className="option-field" value={key}>{grades[key]}</option>)
                                )
                        }
                    </select>

                    <label className="input-label" htmlFor="grade">Grade</label>
                </div>

                <div className="form-control">
                    <textarea
                        className="input-field input-area"
                        htmlFor="description"
                        name="description"
                        placeholder="Description"
                        onChange={onFormChange}
                    />
                    <label className="input-label" htmlFor="description">Description</label>
                </div>

                <button className="submit-btn" type="submit">
                    Post your question
                </button>
            </form>
        </div>
    );
};

export default AskForm;