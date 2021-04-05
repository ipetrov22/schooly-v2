import { IoMdClose } from 'react-icons/io';
import { NotificationContext } from '../../../contexts/NotificationContext';
import { useContext } from 'react';
import './Notification.scss';

const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext);

    const onClose = () => {
        setNotification({ message: '', type: '' });
    };

    return (
        <div className={`notification-container ${notification.type}`}>
            <p className="message">{notification.message}</p>

            <button className="close-btn" onClick={onClose}>
                <IoMdClose size="22px" fill="#fff" />
            </button>
        </div>
    );
};

export default Notification;