import { FaUserAlt } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/userActions';
import { useContext } from 'react';
import { NotificationContext } from '../../../../contexts/NotificationContext';
import './Drawer.scss';

const Drawer = ({ open, setOpen, logout }) => {
    const { setNotification } = useContext(NotificationContext);

    const onLogout = async () => {
        setOpen(false);
        await logout();
        setNotification({ message: 'Logout successful!', type: 'success' });
    };

    return (
        <nav className={`drawer-container ${open ? 'open' : ''}`}>
            <section className="drawer-section">
                <Link to="/profile">
                    <button className="drawer-link-btn" onClick={() => setOpen(false)}>
                        <FaUserAlt size="20px" />
                        <span className="link-name">Profile</span>
                    </button>
                </Link>
            </section>

            <section className="drawer-section">
                <button className="drawer-link-btn" onClick={onLogout}>
                    <IoMdExit size="20px" />
                    <span className="link-name">Logout</span>
                </button>
            </section>
        </nav>
    );
};

const mapDispatchToProps = {
    logout
};

export default connect(null, mapDispatchToProps)(Drawer);