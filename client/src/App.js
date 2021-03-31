import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import pages from './pages';
import './App.scss';

const App = () => {
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

export default App;