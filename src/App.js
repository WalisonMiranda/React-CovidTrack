import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./styles/global.scss";
import styles from "./styles/App.module.scss";

import Home from "./pages/home";
import CountryList from "./pages/country-list";

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <div className={styles.container}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={styles.link}
                exact
                activeClassName={styles.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country-list"
                className={styles.link}
                activeClassName={styles.active}
              >
                Países
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.main}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/country-list">
              <CountryList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
