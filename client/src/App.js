import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import pages from './pages';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import './App.scss';

const App = ({ verifyAuth }) => {
  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return (
    <Router>
      <Switch>
        <Route path={['/', '/login', '/register', '/question']} exact>
          <MainLayout>
            <Switch>
              <PublicRoute restricted={false} path="/" exact component={pages.Home} />
              <PublicRoute restricted={true} path="/login" component={pages.Login} />
              <PublicRoute restricted={true} path="/register" component={pages.Register} />
              <PrivateRoute path="/question" component={pages.Question} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = {
  verifyAuth
};

export default connect(null, mapDispatchToProps)(App);