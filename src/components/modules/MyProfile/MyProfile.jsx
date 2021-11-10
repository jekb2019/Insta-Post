import React from 'react';
import BasicButton from '../../elements/BasicButton/BasicButton';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MyProfile.module.css';

const MyProfile = ({ username, name, description, image, isOwner }) => (
  <div className={styles.container}>
    <div className={styles.upper}>
      <ProfileImg borderColor="gray" size="large" image={image} />
      <div className={styles.upper_right}>
        {isOwner && (
          <BasicButton
            color="white"
            label="Save"
            size="small"
            backgroundColor="green"
          />
        )}
        {isOwner ? (
          <>
            <input
              type="text"
              className={styles.basic_input}
              placeholder="Name"
            />
            <input
              type="text"
              className={styles.basic_input}
              placeholder={`${username}`}
            />
          </>
        ) : (
          <>
            <p className={styles.user_profile_info}>Name: {name}</p>
            <p className={styles.user_profile_info}>Username: {username}</p>
          </>
        )}
      </div>
    </div>
    <div className={styles.lower}>
      {isOwner ? (
        <textarea
          className={styles.description_input}
          placeholder="Describe yourself here."
        />
      ) : (
        <p className={styles.profile_description}>
          {description === '' ? 'No Desctipion yet!' : description}
        </p>
      )}
    </div>
  </div>
);

export default MyProfile;
