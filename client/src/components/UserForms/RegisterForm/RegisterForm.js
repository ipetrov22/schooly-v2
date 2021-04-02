import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import validators from '../../../helpers/validators';
import { connect } from 'react-redux';
import { register } from '../../../actions/userActions';
import '../Form.scss';

const RegisterForm = ({ register }) => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [formErrors, setFormErrors] = useState({
        username: null,
        email: null,
        password: null,
        repeatPassword: null
    });

    const onFormChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value.trim();

        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);

        const newFormErrors = { ...formErrors };
        newFormErrors[fieldName] = validators[fieldName](fieldValue, formData.password);
        if (fieldName === 'password' && formErrors.repeatPassword !== null) {
            newFormErrors.repeatPassword = validators.repeatPassword(formData.repeatPassword, fieldValue);
        }
        setFormErrors(newFormErrors);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (formErrors.username === '' &&
            formErrors.email === '' &&
            formErrors.password === '' &&
            formErrors.repeatPassword === '') {
            try {
                await register(formData);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={onSubmitForm}>
                <article className="icon-container">
                    <MdLock size={'35px'}
                        style={{ background: '#3f51b5', fill: '#fff', borderRadius: '50%', padding: '7px' }} />
                </article>

                <h2 className="title">Register</h2>

                <p className="error">{formErrors.username || ''}</p>
                <input className={`input-field ${formErrors.username ? 'invalid'
                    : formErrors.username === '' ? 'valid' : ''}`}
                    type="text"
                    htmlFor="username"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={onFormChange}
                />

                <p className="error">{formErrors.email || ''}</p>
                <input className={`input-field ${formErrors.email ? 'invalid'
                    : formErrors.email === '' ? 'valid' : ''}`}
                    autoComplete="email"
                    type="email"
                    htmlFor="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={onFormChange}
                />

                <p className="error">{formErrors.password || ''}</p>
                <input className={`input-field ${formErrors.password ? 'invalid'
                    : formErrors.password === '' ? 'valid' : ''}`}
                    type="password"
                    htmlFor="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={onFormChange}
                />

                <p className="error">{formErrors.repeatPassword || ''}</p>
                <input className={`input-field ${formErrors.repeatPassword ? 'invalid'
                    : formErrors.repeatPassword === '' ? 'valid' : ''}`}
                    type="password"
                    htmlFor="password"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    required
                    onChange={onFormChange}
                />

                <button className="submit-btn" type="submit">
                    Register
                </button>


                <Link to="/login">
                    <p className="link">Already have an account? Login here.</p>
                </Link>
            </form>

        </div>
    );
};

const mapDispatchToProps = {
    register
};

export default connect(null, mapDispatchToProps)(RegisterForm);