import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CreateWorkout } from './features/CreateWorkout'

const Home = () => (
  <div>
    <h2>Home</h2>

    <CreateWorkout />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'><Home /></Route>
          {/* TODO: Add new routes */}
        </Switch>

      </div>
    </Router>
  );
}

export default App