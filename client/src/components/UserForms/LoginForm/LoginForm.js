import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import { connect } from 'react-redux';
import { login } from '../../../actions/userActions';
import '../Form.scss';

const LoginForm = ({ login }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onFormChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (formData.email !== '' && formData.password !== '') {
            try {
                await login(formData);
                history.push('/');
            } catch (error) {
                alert('Invalid credentials!');
            }
        }
    }

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={onSubmitForm}>
                <article className="icon-container">
                    <MdLock size={'35px'}
                        style={{ background: '#3f51b5', fill: '#fff', borderRadius: '50%', padding: '7px' }} />
                </article>

                <h2 className="title">Login</h2>

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

                <button className="submit-btn" type="submit">
                    Login
                </button>


                <Link to="/register">
                    <p className="link">Don't have an account? Register here.</p>
                </Link>
            </form>

        </div>
    );
};

const mapDispatchToProps = {
    login
};

export default connect(null, mapDispatchToProps)(LoginForm);