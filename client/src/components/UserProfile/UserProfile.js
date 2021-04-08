import UserInfo from './UserInfo/UserInfo';
import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className="user-profile-wrapper">
            <h1 className="title">Your Profile</h1>

            <UserInfo />
        </div>
    );
};

export default UserProfile;