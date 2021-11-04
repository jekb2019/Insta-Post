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
Amplify.configure(config);
/**
 *
 */
const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

const UploadPostModal = WithModal(UploadPost);

function App() {
  const loggedIn = true;
  const [currentUser] = useContext(CurrentUserContext);
  const [modalState] = useContext(UploadPostModalContext);

  return (
    <>
      {modalState.isOpen && <UploadPostModal />}
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
    </>
  );
}

export default withAuthenticator(App);
