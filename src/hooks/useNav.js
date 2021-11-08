import { useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { CurrentUserContext } from '../contexts/Auth/AuthContext';
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
