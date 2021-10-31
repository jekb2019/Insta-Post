import React from 'react';
import AddNewButton from '../../components/elements/AddNewButton/AddNewButton';
import FriendList from '../../components/modules/FriendList/FriendList';
import Post from '../../components/modules/Post/Post';
import PostList from '../../components/modules/PostList/PostList';
import posts from '../../mock/posts';
import styles from './Home.module.css';

const postList = posts;

const Home = (props) => (
  <div className={styles.container}>
    <main className={styles.posts_wrapper}>
      <PostList posts={postList} />
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
