import React from 'react';
import { useParams } from 'react-router';
import MyProfile from '../../components/modules/MyProfile/MyProfile';
import PostList from '../../components/modules/PostList/PostList';
import posts from '../../mock/posts';
import currentUser from '../../mock/user';
import styles from './User.module.css';

const myPosts = posts.filter(
  (post) => post.authorUsername === currentUser.username
);

const User = (props) => {
  const { username } = useParams();
  console.log(username);
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.profile}>
          <MyProfile username={username} />
        </div>
        <div className={styles.posts}>
          <PostList posts={myPosts} />
        </div>
      </div>
    </div>
  );
};

export default User;
