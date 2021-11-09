import { useEffect, useState } from 'react';
import { listUsers } from '../services/userApi';

const useFriendList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  async function getUsers() {
    return await listUsers();
  }

  return [users];
};

export default useFriendList;
