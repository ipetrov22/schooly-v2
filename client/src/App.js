import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import pages from './pages';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={pages.Home} />
        <Route path="/login" component={pages.Login} />
      </Switch>
    </Router>
  );
};

export default App;