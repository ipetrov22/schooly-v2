import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux';
import Drawer from './Drawer';
import Backdrop from './Backdrop';
import { useState } from 'react';
import './Header.scss';

const Header = ({ firebaseUser }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="app-header-wrapper">
            <Drawer open={open} />
            {open && <Backdrop setOpen={setOpen} />}
            
            <div className="header-container">
                <Link to="/">
                    <button className="logo-title">Schooly</button>
                </Link>

                {firebaseUser ?
                    <button className="menu-btn" onClick={() => setOpen(!open)}>
                        <MdMenu size={30} fill={'#fff'} />
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