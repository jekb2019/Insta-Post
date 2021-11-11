import React, { useRef } from 'react';
import BasicButton from '../../elements/BasicButton/BasicButton';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MyProfile.module.css';
import useImagePreview from '../../../hooks/useImagePreview';
import useUpdateUser from '../../../hooks/useUpdateUser';

const MyProfile = ({ userId, username, name, description, image, isOwner }) => {
  const [uploadedImg, handleFileChange] = useImagePreview(null);
  const [
    { nameInput, usernameInput, descriptionInput },
    handleSave,
  ] = useUpdateUser(userId, username, name, description, uploadedImg);

  const imgInputRef = useRef();

  const handleProfileImgClick = () => {
    imgInputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div onClick={handleProfileImgClick} className={styles.profile_img_btn}>
          <ProfileImg
            borderColor="gray"
            size="large"
            image={uploadedImg ? URL.createObjectURL(uploadedImg) : image}
          />
        </div>
        <input
          ref={imgInputRef}
          type="file"
          accept="image/*"
          className={styles.img_input}
          onChange={handleFileChange}
        />
        <div className={styles.upper_right}>
          {isOwner && (
            <BasicButton
              color="white"
              label="Save"
              size="small"
              backgroundColor="green"
              onClick={handleSave}
            />
          )}
          {isOwner ? (
            <>
              <input
                type="text"
                className={styles.basic_input}
                placeholder="Name"
                {...nameInput}
              />
              <input
                type="text"
                className={styles.basic_input}
                placeholder={`${username}`}
                readOnly
                {...usernameInput}
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
            {...descriptionInput}
          />
        ) : (
          <p className={styles.profile_description}>
            {description === '' ? 'No Desctipion yet!' : description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
