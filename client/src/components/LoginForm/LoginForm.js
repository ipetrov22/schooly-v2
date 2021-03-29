import { MdLock } from 'react-icons/md';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <MdLock size={'35px'} style={{ background: '#3f51b5', fill: '#fff', borderRadius: '50%', padding: '5px' }} />
            <h2>Login</h2>

            <form>

            </form>
        </div>
    );
};

export default LoginForm;