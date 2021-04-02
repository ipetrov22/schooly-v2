import { FaUserAlt } from 'react-icons/fa';
import './DrawerLink.scss';

const DrawerLink = () => {
    return (
        <button className="drawer-link-btn">
            <FaUserAlt size={20}/>
            <span className="link-name">Name</span>
        </button>
    );
};

export default DrawerLink;