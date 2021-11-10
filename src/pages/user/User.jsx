import React, { useContext } from 'react';
import { useParams } from 'react-router';
import MyProfile from '../../components/modules/MyProfile/MyProfile';
import PostList from '../../components/modules/PostList/PostList';
import { CurrentUserContext } from '../../contexts/Auth/AuthContext';
import posts from '../../mock/posts';
import currentUser from '../../mock/user';
import styles from './User.module.css';

// TODO: remove mock
const myPosts = posts.filter(
  (post) => post.authorUsername === currentUser.username
);

const User = () => {
  const { username } = useParams(); // not good as the placeholder can change if user enters weird url slug

  const [currentUser] = useContext(CurrentUserContext);
  const isOwner = currentUser.username === username;

  console.log('is Owner? ', isOwner);

  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.profile}>
          <MyProfile
            username={username}
            name="name"
            description=""
            image={null}
            isOwner={isOwner}
          />
        </div>
        <div className={styles.posts}>
          <PostList posts={myPosts} />
        </div>
      </div>
    </div>
  );
};

export default User;
