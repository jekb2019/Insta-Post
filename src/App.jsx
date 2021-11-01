import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MiniProfile from './components/modules/MiniProfile/MiniProfile';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader/WithHeader';

const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

function App() {
  const loggedIn = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/user/:username">
          <UserWithHeader />
        </Route>
        <Route path="/home">
          <HomeWithHeader />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
