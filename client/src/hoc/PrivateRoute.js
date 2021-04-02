import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ firebaseUser, component: Component, ...rest }) => (
    <Route {...rest} render={props => (firebaseUser ? <Component {...props} /> :
        <Redirect to="/login" />)} />
);

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser
});

export default connect(mapStateToProps, null)(PrivateRoute);