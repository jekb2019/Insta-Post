import React from 'react';
import { useHistory } from 'react-router';
import useFriendList from '../../../hooks/useFriendList';
import LoadingSpinner from '../../elements/LoadingSpinner/LoadingSpinner';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './FriendList.module.css';
import useInput from '../../../hooks/useInput';

const FriendList = () => {
  const history = useHistory();
  const [users] = useFriendList();
  const searchInput = useInput('');

  const handleFriendClick = (username) => {
    history.push(`/user/${username}`);
  };

  return (
    <aside className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search friends"
        {...searchInput}
      />
      <ul className={styles.list}>
        {users.length === 0 && <LoadingSpinner />}
        {users.map((user) => {
          const { username, profileImg } = user;
          if (username.startsWith(searchInput.value)) {
            return (
              <li key={user.id}>
                <MiniProfile
                  username={username}
                  image={profileImg}
                  onClick={() => handleFriendClick(username)}
                />
              </li>
            );
          }
          return;
        })}
      </ul>
    </aside>
  );
};

export default FriendList;
