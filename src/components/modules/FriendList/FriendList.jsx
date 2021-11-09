import React from 'react';
import { useHistory } from 'react-router';
import useFriendList from '../../../hooks/useFriendList';
import LoadingSpinner from '../../elements/LoadingSpinner/LoadingSpinner';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './FriendList.module.css';

const FriendList = (props) => {
  const history = useHistory();
  const [users] = useFriendList();

  const handleFriendClick = (username) => {
    history.push(`/user/${username}`);
  };

  return (
    <aside className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search friends"
      />
      <ul className={styles.list}>
        {users.length === 0 && <LoadingSpinner />}
        {users.map((user) => {
          const { username, profileImg } = user;
          return (
            <li key={user.id}>
              <MiniProfile
                username={username}
                image={profileImg}
                onClick={() => handleFriendClick(username)}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default FriendList;
