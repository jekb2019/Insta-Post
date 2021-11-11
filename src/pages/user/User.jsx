import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../../components/elements/LoadingSpinner/LoadingSpinner';
import MyProfile from '../../components/modules/MyProfile/MyProfile';
import PostList from '../../components/modules/PostList/PostList';
import posts from '../../mock/posts';
import currentUser from '../../mock/user';
import { getUserByUsername } from '../../services/userApi';
import styles from './User.module.css';
import useFetchProfileImage from '../../hooks/useFetchProfileImage';

// TODO: remove mock
const myPosts = posts.filter(
  (post) => post.authorUsername === currentUser.username
);

const User = ({ currentUser }) => {
  const isOwner = currentUser.username === username;
  const [user, setUser] = useState(null);

  const [
    fetchedProfileImg,
    fetchProfileImgFromStorage,
  ] = useFetchProfileImage();

  const { username } = useParams(); // not good as the placeholder can change if user enters weird url slug

  useEffect(() => {
    getUserByUsername(username).then((user) => setUser(user[0]));
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfileImgFromStorage(user.profileImg);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.profile}>
          {user ? (
            <MyProfile
              userId={user.id}
              username={user.username}
              name={user.name ?? user.username}
              description={user.description}
              image={fetchedProfileImg}
              isOwner={isOwner}
            />
          ) : (
            <LoadingSpinner />
          )}
        </div>
        <div className={styles.posts}>
          <PostList posts={myPosts} />
        </div>
      </div>
    </div>
  );
};

export default User;
