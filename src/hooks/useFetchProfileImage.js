import { useState } from 'react';
import { fetchProfileImg } from '../services/userApi';

const useFetchProfileImage = () => {
  const [fetchedProfileImg, setFetchedProfileImg] = useState(null);

  const fetchProfileImgFromStorage = (imageName) => {
    fetchProfileImg(imageName).then((img) => setFetchedProfileImg(img));
  };

  return [fetchedProfileImg, fetchProfileImgFromStorage];
};

export default useFetchProfileImage;
