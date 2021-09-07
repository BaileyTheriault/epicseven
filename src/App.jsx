import './app.scss';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Characters from './pages/characters/characters';

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav className="app-nav">
          <div className="nav-logo">
            <Link className="text-link" to="/">
              EpicSeven
            </Link>
          </div>
          <div className="nav-item">
            <Link className="text-link" to="/characters">
              Characters
            </Link>
          </div>
          <div className="nav-item">
            <Link className="text-link" to="/support">
              Support
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
