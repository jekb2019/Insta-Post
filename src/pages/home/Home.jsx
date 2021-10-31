import React from 'react';
import AddNewButton from '../../components/elements/AddNewButton/AddNewButton';
import FriendList from '../../components/modules/FriendList/FriendList';
import Post from '../../components/modules/Post/Post';
import styles from './Home.module.css';

const Home = (props) => (
  <div className={styles.container}>
    <main className={styles.posts_wrapper}>
      <Post />
    </main>
    <aside className={styles.friend_list_container}>
      <FriendList />
    </aside>
    <div className={styles.add_new_btn_container}>
      <AddNewButton color="orange" size="large" />
    </div>
  </div>
);

export default Home;
