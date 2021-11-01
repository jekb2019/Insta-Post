import React from 'react';
import currentUser from '../../../../mock/user';
import BasicButton from '../../../elements/BasicButton/BasicButton';
import MiniProfile from '../../MiniProfile/MiniProfile';
import styles from './EditPost.module.css';

const { username, profileImg, onSave, onCancel } = currentUser;

const EditPost = (props) => (
  <div className={styles.container}>
    <div className={styles.upper}>
      <div className={styles.left}>
        <div className={styles.upper_left_top}>
          <MiniProfile
            username={username}
            location="Auckland"
            image={profileImg}
          />
          <BasicButton
            size="small"
            backgroundColor="orange"
            label="Upload"
            color="white"
          />
        </div>
        <textarea className={styles.description_input} />
        <input className={styles.location_input} type="text" />
      </div>
      <div className={styles.right}>
        <img
          className={styles.post_img}
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="test"
        />
      </div>
    </div>
    <div className={styles.lower}>
      <BasicButton
        label="Save"
        color="white"
        backgroundColor="green"
        size="medium"
        onClick={onSave}
      />
      <div className="ml-5">
        <BasicButton
          label="Cancel"
          color="white"
          backgroundColor="red"
          size="medium"
          onClick={onCancel}
        />
      </div>
    </div>
  </div>
);

export default EditPost;
