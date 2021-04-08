import UserInfo from './UserInfo/UserInfo';
import './UserProfile.scss';
import UserQuestions from './UserQuestions/UserQuestions';

const UserProfile = () => {
    return (
        <div className="user-profile-wrapper">
            <h1 className="user-profile-title">Your Profile</h1>

            <UserInfo />

            <UserQuestions />
        </div>
    );
};

export default UserProfile;