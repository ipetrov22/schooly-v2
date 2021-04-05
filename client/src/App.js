import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import pages from './pages';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import { NotificationProvider } from './contexts/notificationContext';
import Notification from './components/shared/Notification';
import './App.scss';

const App = ({ verifyAuth }) => {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
        <NotificationProvider>
            <Notification />
            
            <Router>
                <Switch>
                    <Route path={['/', '/login', '/register', '/question/:id', '/ask']} exact>
                        <MainLayout>
                            <Switch>
                                <PublicRoute restricted={false} path="/" exact component={pages.Home} />
                                <PublicRoute restricted={true} path="/login" component={pages.Login} />
                                <PublicRoute restricted={true} path="/register" component={pages.Register} />
                                <PrivateRoute path="/question/:questionId" component={pages.Question} />
                                <PrivateRoute path="/ask" component={pages.Ask} />
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Router>
        </NotificationProvider>
    );
};

const mapDispatchToProps = {
    verifyAuth
};

export default connect(null, mapDispatchToProps)(App);