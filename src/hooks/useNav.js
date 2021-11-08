import { useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { CurrentUserContext } from '../contexts/Auth/AuthContext';

// TODO: Should useNav contain history and nav config's hard coded strings?
// TODO: history.push(`/user/${username}`) This line can cause error if username does not exist

/**
 * This custom hook is used in the parent component (Header) of the Navigation component.
 */

function useNav(username) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [_, { signOutFromService }] = useContext(CurrentUserContext);

  const history = useHistory();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItemConfigs = useMemo(
    () => [
      {
        label: 'My Page',
        onClick: () => history.push(`/user/${username}`),
      },
      {
        label: 'Log out',
        onClick: () => {
          signOutFromService();
        },
      },
    ],
    [history]
  );

  return [isNavOpen, toggleNav, navItemConfigs];
}

export default useNav;
