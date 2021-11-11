import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader/WithHeader';
import React, { useContext } from 'react';
import { CurrentUserContext } from './contexts/Auth/AuthContext';
import { AuthFormTypes } from './components/modules/authForms/AuthForm';
import PublicRoute from './router/PublicRoute';
import PrivateRouteWithModal from './router/PrivateRouteWithModal';

const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

function App() {
  const [currentUser] = useContext(CurrentUserContext);
  return (
    <>
      <Switch>
        <PrivateRouteWithModal
          component={<UserWithHeader currentUser={currentUser} />}
          path="/user/:username"
          isLoggedIn={currentUser ? true : false}
        />
        <PrivateRouteWithModal
          component={<HomeWithHeader currentUser={currentUser} />}
          path="/home"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true}
          component={<Auth type={AuthFormTypes.SIGNIN} />}
          path="/signin"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true}
          component={<Auth type={AuthFormTypes.SIGNUP} />}
          path="/signup"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true}
          component={<Auth type={AuthFormTypes.CONFIRM_SIGNUP} />}
          path="/confirmation"
          isLoggedIn={currentUser ? true : false}
        />
        <Route path="/">
          {currentUser ? <Redirect to="/home" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
