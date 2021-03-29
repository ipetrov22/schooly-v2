import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="app-header-wrapper">
            <div className="header-container">
                <Link to="/">
                    <button className="logo-title">Schooly</button>
                </Link>

                <section className="auth-buttons">
                    <Link to="/login">
                        <button className="auth-btn">
                            Login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="auth-btn">
                            Register
                        </button>
                    </Link>
                </section>
            </div>
        </header>
    );
};

export default Header;