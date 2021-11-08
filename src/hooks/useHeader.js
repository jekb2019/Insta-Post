import { useHistory } from 'react-router';

function useHeader() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/home');
  };
  return [redirectToHome];
}

export default useHeader;
