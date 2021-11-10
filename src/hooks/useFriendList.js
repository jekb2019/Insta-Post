import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/Auth/AuthContext';
import { listUsers } from '../services/userApi';

const useFriendList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser] = useContext(CurrentUserContext);

  useEffect(() => {
    getFriends().then(setUsers);
  }, []);

  /**
   * Get all users except the current user
   */
  async function getFriends() {
    const allUsers = await listUsers();
    const friends = allUsers.filter(
      (user) => user.username !== currentUser.username
    );
    return friends;
  }

  return [users];
};

export default useFriendList;
