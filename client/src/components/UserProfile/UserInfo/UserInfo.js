import { connect } from 'react-redux';
import transformDate from '../../../helpers/transformDate';
import { FaUserAlt } from 'react-icons/fa';
import './UserInfo.scss';

const UserInfo = ({ username, email, registrationDate }) => {
    return (
        username && <section className="user-profile-container">
            <section className="user-profile-icon">
                <FaUserAlt size="100px" fill="#535961" />
            </section>

            <section className="user-profile-info">
                <p className="field-name">Username: <span className="field-value">{username}</span></p>
                <p className="field-name">Email: <span className="field-value">{email}</span></p>
                <p className="field-name">Registered on: <span className="field-value">{transformDate(registrationDate)}</span></p>
            </section>
        </section>
    );
};

const mapStateToProps = (state) => ({
    username: state.user.username,
    email: state.user.email,
    registrationDate: state.user.registrationDate
});

export default connect(mapStateToProps, null)(UserInfo);