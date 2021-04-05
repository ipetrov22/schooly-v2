import { IoMdClose } from 'react-icons/io';
import './Notification.scss';

const Notification = () => {
    return (
        <div className="notification-container success">
            <p className="message">Some notification message longer tho</p>

            <button className="close-btn">
                <IoMdClose size="22px" fill="#fff" />
            </button>
        </div>
    );
};

export default Notification;