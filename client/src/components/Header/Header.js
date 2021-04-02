import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux';
import './Header.scss';

const Header = ({ firebaseUser }) => {
    return (
        <header className="app-header-wrapper">
            <div className="header-container">
                <Link to="/">
                    <button className="logo-title">Schooly</button>
                </Link>

                {firebaseUser ?
                    <button className="menu-btn">
                        <MdMenu size={30} fill={'#fff'}/>
                    </button>

                    : <section className="auth-buttons">
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
                }
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser
});

export default connect(mapStateToProps, null)(Header);