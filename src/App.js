
import Cadastro from "./pages/register"
import Login from "./pages/login"
import Mainpage from "./pages/mainpage"
import Pokecard from "./components/pokecard"
import Favoritos from "./pages/favorites"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Cadastro</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>

            <Route path="/main">
              <Mainpage/>
            </Route>

            <Route path="/cadastro">
              <Cadastro/>
            </Route>

            <Route path="/favoritos/:name" component={Favoritos}>
              <Favoritos/>
            </Route>

          </Switch>

      </Router>
  );
}

export default App;
