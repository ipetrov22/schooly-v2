import './Header.scss';

const Header = () => {
    return(
        <header className="app-header-wrapper">
            <div className="header-container">
                <button className="logo-title">Schooly</button>

                <section className="auth-buttons">
                    <button className="auth-btn">
                        Login
                    </button>

                    <button className="auth-btn">
                        Register
                    </button>
                </section>
            </div>
        </header>
    );
};

export default Header;