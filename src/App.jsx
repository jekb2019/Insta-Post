import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import User from './pages/user/User';
import WithHeader from './pages/hoc/WithHeader/WithHeader';
import React, { useContext } from 'react';
import { CurrentUserContext } from './contexts/Auth/AuthContext';
import WithModal from './hoc/WithModal/WithModal';
import UploadPost from './components/modules/modals/UploadPost/UploadPost';
import { UploadPostModalContext } from './contexts/Modal/ModalContext';
import { AuthFormTypes } from './components/modules/authForms/AuthForm';
import PublicRoute from './router/PublicRoute';
import PrivateRoute from './router/PrivateRoute';

const HomeWithHeader = WithHeader(Home);
const UserWithHeader = WithHeader(User);

const UploadPostModal = WithModal(UploadPost);

// TODO: Refactor routing
// TODO: What is the responsibility of App component? (Where should modal be?)

function App() {
  const [currentUser] = useContext(CurrentUserContext);
  const [modalState] = useContext(UploadPostModalContext);

  return (
    <>
      {modalState.isOpen && <UploadPostModal />}
      <Switch>
        <PrivateRoute
          component={<UserWithHeader currentUser={currentUser} />}
          path="/user/:username"
          isLoggedIn={currentUser ? true : false}
        />
        <PrivateRoute
          component={<HomeWithHeader currentUser={currentUser} />}
          path="/home"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true} // change back to true later
          component={<Auth type={AuthFormTypes.SIGNIN} />}
          path="/signin"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true} // change back to true later
          component={<Auth type={AuthFormTypes.SIGNUP} />}
          path="/signup"
          isLoggedIn={currentUser ? true : false}
        />
        <PublicRoute
          restricted={true} // change back to true later
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
