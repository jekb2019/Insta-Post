import React, { useState } from 'react';
import AddNewButton from '../../components/elements/AddNewButton/AddNewButton';
import FriendList from '../../components/modules/FriendList/FriendList';
import UploadPost from '../../components/modules/modals/UploadPost/UploadPost';
import PostList from '../../components/modules/PostList/PostList';
import WithModal from '../../hoc/WithModal/WithModal';
import posts from '../../mock/posts';
import styles from './Home.module.css';

const postList = posts;

const UploadPostModal = WithModal(UploadPost);

const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
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
        <AddNewButton
          color="orange"
          size="large"
          onClick={() => toggleModal(true)}
        />
      </div>
      {isModalOpen && <UploadPostModal />}
    </div>
  );
};

export default Home;
