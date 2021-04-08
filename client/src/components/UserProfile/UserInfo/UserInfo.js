import { FaUserAlt } from 'react-icons/fa';
import './UserInfo.scss';

const UserInfo = () => {
    return (
        <section className="user-profile-container">
            <section className="user-profile-icon">
                <FaUserAlt size="100px" fill="#535961" />
            </section>

            <section className="user-profile-info">
                <p className="field-name">Username: <span className="field-value">user1</span></p>
                <p className="field-name">Email: <span className="field-value">user1@abv.bg</span></p>
                <p className="field-name">Registered on: <span className="field-value">Apr 10 2021 12:21</span></p>
            </section>
        </section>
    );
};

export default UserInfo;