import React from 'react';
import currentUser from '../../../mock/user';
import userList from '../../../mock/userList';
import Post from '../Post/Post';
import styles from './PostList.module.css';

const user = currentUser;
const users = userList;

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        const { authorUsername, location, image, description } = post;
        const isOwner = user.username === authorUsername;
        const author = users.find((user) => user.username === authorUsername);
        const profileImg = author.profileImg;
        return (
          <li key={post.id} className={styles.post}>
            <Post
              isOwner={isOwner}
              authorUsername={authorUsername}
              location={location}
              image={image}
              profileImg={profileImg}
              description={description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
