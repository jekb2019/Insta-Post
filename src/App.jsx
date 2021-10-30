import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MiniProfile from './components/modules/MiniProfile/MiniProfile';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';

function App() {
  const loggedIn = false;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* {loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />} */}
          <h1>Implement redirection depending on Auth status</h1>
          <MiniProfile username="jekb2019" location="Auckland" />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
