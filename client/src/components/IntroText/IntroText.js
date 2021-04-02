import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './IntroText.scss';

const IntroText = ({ firebaseUser }) => {

    const notAuthContent = (
        <>
            <p className="description">Login or register to start asking questions.</p>

            <section className="btn-container">
                <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                </Link>

                <Link to="/register">
                    <button className="btn btn-secondary">Register</button>
                </Link>
            </section>
        </>
    );

    const authContent = (
        <>
            <section className="btn-container">
                <Link to="/ask">
                    <button className="btn btn-primary">Ask a question</button>
                </Link>
            </section>
        </>
    );

    return (
        <div className="intro-text">
            <h1 className="title">Schooly</h1>

            <p className="description">Having difficulties in school? Get help on Schooly!</p>

            {
                firebaseUser ?
                    authContent
                    : notAuthContent
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser
});

export default connect(mapStateToProps, null)(IntroText);