import React from 'react';
import { useHistory } from 'react-router';
import userList from '../../../mock/userList';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './FriendList.module.css';

const users = userList;

const FriendList = (props) => {
  const history = useHistory();

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
