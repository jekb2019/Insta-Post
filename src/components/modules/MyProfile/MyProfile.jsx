import React from 'react';
import currentUser from '../../../mock/user';
import BasicButton from '../../elements/BasicButton/BasicButton';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MyProfile.module.css';

const myImage = currentUser.profileImg;

const MyProfile = ({ username, name, description, image }) => (
  <div className={styles.container}>
    <div className={styles.upper}>
      <ProfileImg borderColor="gray" size="large" image={myImage} />
      <div className={styles.upper_right}>
        <BasicButton
          color="white"
          label="Save"
          size="small"
          backgroundColor="green"
        />
        <input type="text" className={styles.basic_input} placeholder="Name" />
        <input
          type="text"
          className={styles.basic_input}
          placeholder="Usernamae"
        />
      </div>
    </div>
    <div className={styles.lower}>
      <textarea
        className={styles.description_input}
        placeholder="Describe yourself here."
      />
    </div>
  </div>
);

export default MyProfile;
