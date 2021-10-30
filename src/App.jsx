import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MiniProfile from './components/modules/MiniProfile/MiniProfile';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader';

const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

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
