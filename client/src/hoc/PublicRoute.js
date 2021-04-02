import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ firebaseUser, component: Component, restricted, ...rest }) => (
    <Route {...rest} render={props => (firebaseUser && restricted ?
        <Redirect to="/" /> : <Component {...props} />)} />
);

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser
});

export default connect(mapStateToProps, null)(PublicRoute);