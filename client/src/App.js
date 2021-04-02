import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import pages from './pages';
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
        <Route path={['/', '/login', '/register', '/question']}>
          <MainLayout>
            <Switch>
              <Route path="/" exact component={pages.Home} />
              <Route path="/login" component={pages.Login} />
              <Route path="/register" component={pages.Register} />
              <Route path="/question" component={pages.Question} />
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