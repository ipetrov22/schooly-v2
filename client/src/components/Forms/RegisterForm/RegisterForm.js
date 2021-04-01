import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import '../Form.scss';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const onFormChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value.trim();

        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;

        setFormData(newFormData);
    }

    return (
        <div className="form-wrapper">
            <form className="form">
                <article className="icon-container">
                    <MdLock size={'35px'}
                        style={{ background: '#3f51b5', fill: '#fff', borderRadius: '50%', padding: '7px' }} />
                </article>

                <h2 className="title">Register</h2>

                <input className="input-field"
                    type="text"
                    htmlFor="username"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={onFormChange}
                />

                <input className="input-field"
                    autoComplete="email"
                    type="email"
                    htmlFor="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={onFormChange}
                />

                <input className="input-field"
                    type="password"
                    htmlFor="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={onFormChange}
                />

                <input className="input-field"
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

export default RegisterForm;