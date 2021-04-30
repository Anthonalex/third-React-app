import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MemoryGame from "./components/MemoryGame/memoryGame";
import WeatherTracker from "./components/WeatherTracker/weatherTracker";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MemoryGame">Memory Game</Link>
            </li>
            <li>
              <Link to="/WeatherTracker">Weather Tracker App</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/MemoryGame">
            <MemoryGame />
          </Route>
          <Route path="/WeatherTracker">
            <WeatherTracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div className="home-page-container">
      <h1>Welcome to my third-React-app</h1>
      <p>please select your page and enjoy!</p>
    </div>
  );
}
