import { MdLock } from 'react-icons/md';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <article className="icon-container">
                    <MdLock size={'35px'}
                        style={{ background: '#3f51b5', fill: '#fff', borderRadius: '50%', padding: '5px' }} />
                </article>

                <h2 className="title">Login</h2>

                <input className="input-field" autoComplete="email" type="email" htmlFor="email" name="email" required />
            </form>
        </div>
    );
};

export default LoginForm;