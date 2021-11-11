import React, { useContext } from 'react';
import AddNewButton from '../../components/elements/AddNewButton/AddNewButton';
import FriendList from '../../components/modules/FriendList/FriendList';
import PostList from '../../components/modules/PostList/PostList';
import {
  ACTIONS,
  UploadPostModalContext,
} from '../../contexts/Modal/ModalContext';
import posts from '../../mock/posts';
import styles from './Home.module.css';

const postList = posts;

const Home = () => {
  const dispatch = useContext(UploadPostModalContext)[1];

  const handleCreateBtn = () => {
    dispatch({ type: ACTIONS.OPEN_CREATE_MODAL });
  };

  return (
    <div className={styles.container}>
      <main className={styles.posts_wrapper}>
        <PostList posts={postList} />
      </main>
      <aside className={styles.friend_list_container}>
        <FriendList />
      </aside>
      <div className={styles.add_new_btn_container}>
        <AddNewButton color="orange" size="large" onClick={handleCreateBtn} />
      </div>
    </div>
  );
};

export default Home;
