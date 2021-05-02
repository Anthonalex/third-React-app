import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MemoryGame from "./components/MemoryGame/memoryGame";
import WeatherTracker from "./components/WeatherTracker/weatherTracker";
import CityName from "./components/WeatherTracker/page/cityName";
import TagInput from "./components/TagInput/tagInput";

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
            <li>
              <Link to="/tagInput">Tag Input</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/MemoryGame">
            <MemoryGame />
          </Route>
          <Route exact path="/WeatherTracker">
            <WeatherTracker />
          </Route>
          <Route exact path="/WeatherTracker/:cityName">
            <CityName />
          </Route>
          <Route exact path="/tagInput">
            <TagInput />
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
