import Header from '../components/Header';
import LoginForm from '../components/Forms/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div className="login-page">
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;