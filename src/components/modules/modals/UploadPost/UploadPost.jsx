import React, { useContext, useEffect, useState } from 'react';
import BasicButton from '../../../elements/BasicButton/BasicButton';
import MiniProfile from '../../MiniProfile/MiniProfile';
import styles from './UploadPost.module.css';
import placeholderImg from '../../../../assets/images/placeholder.png';
import {
  ACTIONS,
  UploadPostModalContext,
} from '../../../../contexts/Modal/ModalContext';
import useInput from '../../../../hooks/useInput';
import { CurrentUserContext } from '../../../../contexts/Auth/AuthContext';
import { createPost } from '../../../../services/postApi';
import {
  fetchProfileImgWithUsername,
  getUserById,
} from '../../../../services/userApi';

const UploadPost = () => {
  const [modalState, dispatch] = useContext(UploadPostModalContext);

  const descriptionInput = useInput('');
  const locationInput = useInput('');
  const [currentUser, _] = useContext(CurrentUserContext);
  const [profileImgName, setProfileImgName] = useState(null);

  useEffect(() => {
    if (currentUser) {
      getUserById(currentUser.id).then((user) =>
        setProfileImgName(user.data.getUser.profileImgName)
      );
    }
  }, [currentUser]);

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const uploadPost = async () => {
    if (descriptionInput.value === '') {
      alert('Say something :)');
      return;
    }
    try {
      await createPost(
        descriptionInput.value,
        'image',
        currentUser.id,
        locationInput.value
      );
      alert('Post successfully uploaded!');
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <div className={styles.upper_left_top}>
            <MiniProfile
              username={currentUser.username}
              location="New Zealand"
              image={''}
            />
            <BasicButton
              size="small"
              backgroundColor="orange"
              label="Upload"
              color="white"
            />
          </div>
          <textarea
            className={styles.description_input}
            {...descriptionInput}
          />
          <input
            className={styles.location_input}
            {...locationInput}
            type="text"
          />
        </div>
        <div className={styles.right}>
          <img className={styles.post_img} src={placeholderImg} alt="test" />
        </div>
      </div>
      <div className={styles.lower}>
        <BasicButton
          label="Save"
          color="white"
          backgroundColor="green"
          size="medium"
          onClick={uploadPost}
        />
        <div className="ml-5">
          <BasicButton
            label="Cancel"
            color="white"
            backgroundColor="red"
            size="medium"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
