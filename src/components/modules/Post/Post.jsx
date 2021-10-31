import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from '../../elements/BasicButton/BasicButton';
import MiniProfile from '../MiniProfile/MiniProfile';
import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const Post = ({
  isOwner,
  authorUsername,
  location,
  image,
  profileImg,
  description,
}) => (
  <section className={styles.container}>
    <div className={styles.header}>
      <MiniProfile
        username={authorUsername}
        location={location}
        image={profileImg}
      />
      {isOwner && (
        <div className={styles.buttons}>
          <BasicButton
            label="Edit"
            size="small"
            color="white"
            backgroundColor="green"
          />
          <div className="ml-5">
            <BasicButton
              label="Delete"
              size="small"
              color="white"
              backgroundColor="red"
            />
          </div>
        </div>
      )}
    </div>
    <img className={styles.img} src={image} alt="Post" />
    <div className={styles.footer}>
      <div className={styles.reactions}>
        <FontAwesomeIcon
          className={`${styles.reaction_icon} ${styles.like}`}
          icon={faHeart}
        />
        <FontAwesomeIcon
          className={`${styles.reaction_icon} ${styles.comment}`}
          icon={faComment}
        />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  </section>
);

Post.propTypes = {
  isOwner: PropTypes.bool,
};

export default Post;
