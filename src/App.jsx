import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader/WithHeader';
import React, { useContext } from 'react';
import { CurrentUserContext } from './contexts/Auth/AuthContext';

const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

function App() {
  const loggedIn = true;
  const [currentUser] = useContext(CurrentUserContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/:username">
          <UserWithHeader currentUser={currentUser} />
        </Route>
        <Route path="/home">
          <HomeWithHeader currentUser={currentUser} />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
