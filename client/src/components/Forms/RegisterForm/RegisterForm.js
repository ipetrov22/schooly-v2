import { Link } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import '../Form.scss';

const RegisterForm = () => {
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
                />

                <input className="input-field"
                    autoComplete="email"
                    type="email"
                    htmlFor="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                <input className="input-field"
                    type="password"
                    htmlFor="password"
                    наме="password"
                    placeholder="Password"
                    required
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