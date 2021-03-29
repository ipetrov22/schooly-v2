import { Link } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
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
                />

                <input className="input-field"
                    type="password"
                    htmlFor="password"
                    наме="password"
                    placeholder="Password"
                    required
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

export default LoginForm;