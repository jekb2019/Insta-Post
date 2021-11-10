import { useRef } from 'react';
import { useHistory } from 'react-router';
import { AuthFormTypes } from '../components/modules/authForms/AuthForm';
import {
  confirmSignUp,
  resendConfirmationCode,
  signIn,
  signUp,
} from '../services/auth';
import { createUser } from '../services/userApi';

const useAuthFormSubmit = (type, username, password, email, code) => {
  const history = useHistory();
  const userSub = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (type) {
      case AuthFormTypes.SIGNIN:
        await signIn(username.value, password.value);
        return;
      case AuthFormTypes.SIGNUP:
        try {
          const user = await signUp(
            username.value,
            password.value,
            email.value
          );
          userSub.current = user.userSub;
          history.push('/confirmation');
        } catch (err) {
          alert('Sign in failed');
        }
        return;
      case AuthFormTypes.CONFIRM_SIGNUP:
        try {
          await confirmSignUp(username.value, code.value);
          await createUser(userSub.current, username.value);
          history.push('/signin');
        } catch (e) {
          alert('Invalid code');
        }
        return;
      default:
        throw new Error('Invalid Auth Action');
    }
  };

  const resendCode = async () => {
    await resendConfirmationCode(username.value);
  };

  return [handleSubmit, resendCode];
};

export default useAuthFormSubmit;
