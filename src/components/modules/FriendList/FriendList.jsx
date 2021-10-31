import React from 'react';
import userList from '../../../mock/userList';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './FriendList.module.css';

const users = userList;
console.log(users);

const FriendList = (props) => (
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
          <li>
            <MiniProfile username={username} image={profileImg} />
          </li>
        );
      })}
      {/* <li>
        <MiniProfile username="jekb2019" />
      </li>
      <li>
        <MiniProfile username="cool_nickname" />
      </li>
      <li>
        <MiniProfile username="hihihi_jason" />
      </li>
      <li>
        <MiniProfile username="jekb2019" />
      </li> */}
    </ul>
  </aside>
);

export default FriendList;
