import Storage from '@aws-amplify/storage';
import { updateUser } from '../services/userApi';
import useInput from './useInput';

const useUpdateUser = (userId, username, name, description, uploadedImg) => {
  const nameInput = useInput(name);
  const usernameInput = useInput(username);
  const descriptionInput = useInput(description ?? '');

  const handleSaveImgToStorage = async () => {
    if (uploadedImg) {
      await Storage.put(uploadedImg.name, uploadedImg);
    }
  };

  const handleUpdateUser = async () => {
    await updateUser(
      userId,
      usernameInput.value,
      nameInput.value,
      descriptionInput.value,
      uploadedImg ? uploadedImg.name : null
    );
  };

  const handleSave = async () => {
    await handleSaveImgToStorage();
    await handleUpdateUser();
  };

  const inputs = {
    nameInput,
    usernameInput,
    descriptionInput,
  };

  return [inputs, handleSave];
};

export default useUpdateUser;
