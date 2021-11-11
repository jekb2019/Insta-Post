import React, { useRef, useState } from 'react';
import BasicButton from '../../elements/BasicButton/BasicButton';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MyProfile.module.css';
import { Storage } from 'aws-amplify';
import useInput from '../../../hooks/useInput';
import { updateUser } from '../../../services/userApi';

const MyProfile = ({ userId, username, name, description, image, isOwner }) => {
  console.log(userId, username, name, description, image, isOwner);
  const [uploadedImg, setUploadedImg] = useState(null);
  const nameInput = useInput(name);
  const usernameInput = useInput(username);
  const descriptionInput = useInput(description ?? '');

  const imgInputRef = useRef();

  const handleProfileImgClick = () => {
    imgInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setUploadedImg(file);
    console.log(file);
  };

  const handleSave = async () => {
    if (uploadedImg) {
      await Storage.put(uploadedImg.name, uploadedImg);
    }
    await updateUser(
      userId,
      usernameInput.value,
      nameInput.value,
      descriptionInput.value,
      uploadedImg ? uploadedImg.name : null
    );
    alert('Update Done!');
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
