import React from 'react';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './FriendList.module.css';

const FriendList = (props) => (
  <div className={styles.container}>
    <input
      className={styles.searchInput}
      type="text"
      placeholder="search friends"
    />
    <ul className={styles.list}>
      <li>
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
      </li>
    </ul>
  </div>
);

export default FriendList;
