import React, { useState } from 'react';
import AddNewButton from '../../components/elements/AddNewButton/AddNewButton';
import FriendList from '../../components/modules/FriendList/FriendList';
import EditPost from '../../components/modules/modals/EditPost/EditPost';
import PostList from '../../components/modules/PostList/PostList';
import WithModal from '../../hoc/WithModal/WithModal';
import posts from '../../mock/posts';
import styles from './Home.module.css';

const postList = posts;

const EditPostModal = WithModal(EditPost);

const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {isModalOpen && <EditPostModal />}
    </div>
  );
};

export default Home;
