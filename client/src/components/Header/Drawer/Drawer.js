import { FaUserAlt } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Drawer.scss';

const Drawer = ({ open }) => {
    return (
        <nav className={`drawer-container ${open ? 'open' : ''}`}>
            <section className="drawer-section">
                <Link to="/">
                    <button className="drawer-link-btn">
                        <FaUserAlt size={20} />
                        <span className="link-name">Profile</span>
                    </button>
                </Link>
            </section>

            <section className="drawer-section">
                <button className="drawer-link-btn">
                    <IoMdExit size={23} />
                    <span className="link-name">Logout</span>
                </button>
            </section>
        </nav>
    );
};

export default Drawer;