import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader/WithHeader';
import React, { useContext } from 'react';
import { CurrentUserContext } from './contexts/Auth/AuthContext';
import WithModal from './hoc/WithModal/WithModal';
import UploadPost from './components/modules/modals/UploadPost/UploadPost';
import { UploadPostModalContext } from './contexts/Modal/ModalContext';

/**
 * Amplify Auth
 */
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { AuthFormTypes } from './components/modules/authForms/AuthForm';
import PublicRoute from './router/PublicRoute';
import { isLoggedIn } from './utils/helper';
import PrivateRoute from './router/PrivateRoute';
Amplify.configure(config);
/**
 *
 */
const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

const UploadPostModal = WithModal(UploadPost);

const AuthTest = withAuthenticator(Auth);

function App() {
  const loggedIn = isLoggedIn();
  const [currentUser] = useContext(CurrentUserContext);
  const [modalState] = useContext(UploadPostModalContext);

  return (
    <>
      <BrowserRouter>
        {modalState.isOpen && <UploadPostModal />}
        <Switch>
          <PrivateRoute
            component={<UserWithHeader currentUser={currentUser} />}
            path="/user/:username"
          />
          <PrivateRoute
            component={<HomeWithHeader currentUser={currentUser} />}
            path="/home"
          />
          <PublicRoute
            restricted={true}
            component={<Auth type={AuthFormTypes.SIGNIN} />}
            path="/signin"
          />
          <PublicRoute
            restricted={true}
            component={<Auth type={AuthFormTypes.SIGNUP} />}
            path="/signup"
          />
          <PublicRoute
            restricted={true}
            component={<Auth type={AuthFormTypes.CONFIRM_SIGNUP} />}
            path="/confirmation"
          />
          <Route path="/">
            {loggedIn ? <Redirect to="/home" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
