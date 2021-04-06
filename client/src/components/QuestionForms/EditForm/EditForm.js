import { MdSchool } from 'react-icons/md';
import subjects from '../../../dictionaries/subjects';
import grades from '../../../dictionaries/grades';
import questionValidators from '../../../helpers/questionValidators';
import { connect } from 'react-redux';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NotificationContext } from '../../../contexts/NotificationContext';
import { getOneQuestion, editQuestion } from '../../../actions/questionActions';
import '../QuestionForm.scss';

const EditForm = ({ firebaseUser, userId, question, getOneQuestion, editQuestion, match }) => {
    const { setNotification } = useContext(NotificationContext);
    const history = useHistory();

    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        grade: '',
        description: ''
    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        subject: '',
        grade: '',
        description: ''
    });

    useEffect(() => {
        if (firebaseUser && firebaseUser !== true) {
            const { questionId } = match.params;

            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await getOneQuestion(questionId, idToken);
                })
                .catch(console.log);
        }
    }, [firebaseUser, getOneQuestion, match.params]);

    useEffect(() => {
        if (question._id && question.author._id !== userId) {
            history.push(`/question/${question._id}`);
        }

        setFormData({
            title: question.title,
            subject: question.subject,
            grade: question.grade,
            description: question.description
        });
    }, [question, history, userId]);

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

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (formErrors.title === ''
            && formErrors.subject === ''
            && formErrors.grade === ''
            && formErrors.description === '' && firebaseUser) {

            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await editQuestion(formData, question._id, idToken);
                    history.push(`/question/${question._id}`);
                })
                .catch((err) => setNotification({ message: err, type: 'error' }));
        }
    };

    return (
        question.title && <div className="question-form-wrapper">
            <form className="form" onSubmit={onFormSubmit}>
                <article className="icon-container">
                    <MdSchool size={'45px'} />
                </article>

                <h2 className="title">Edit your question</h2>

                <div className="form-control">
                    <input
                        className={`input-field ${formErrors.title ? 'invalid-field' : ''}`}
                        htmlFor="title"
                        name="title"
                        placeholder="Title"
                        onChange={onFormChange}
                        value={formData.title}
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
                        value={formData.subject}
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
                        value={formData.grade}
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
                        value={formData.description}
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
                    Edit your question
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser,
    userId: state.user._id,
    question: state.question.question
});

const mapDispatchToProps = {
    getOneQuestion,
    editQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);