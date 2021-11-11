import { useState } from 'react';

const useImagePreview = (initialImg) => {
  const [uploadedImg, setUploadedImg] = useState(initialImg);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setUploadedImg(file);
    console.log(file);
  };

  return [uploadedImg, handleImgChange];
};

export default useImagePreview;
