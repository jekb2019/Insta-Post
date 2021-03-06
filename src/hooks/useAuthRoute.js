import { useHistory } from 'react-router';
import { AuthFormTypes } from '../components/modules/authForms/AuthForm';

const useAuthRoute = () => {
  const history = useHistory();

  const switchForm = (formType) => {
    switch (formType) {
      case AuthFormTypes.SIGNIN:
        history.push('/signin');
        return;
      case AuthFormTypes.SIGNUP:
        history.push('/signup');
        return;
      case AuthFormTypes.CONFIRM_SIGNUP:
        history.push('/confirmation');
        return;
      default:
        return null;
    }
  };

  return switchForm;
};

export default useAuthRoute;
