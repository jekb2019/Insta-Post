import React from 'react';
import { useContext } from 'react';
import UploadPost from '../components/modules/modals/UploadPost/UploadPost';
import { UploadPostModalContext } from '../contexts/Modal/ModalContext';
import WithModal from '../hoc/WithModal/WithModal';
import PrivateRoute from './PrivateRoute';

const UploadPostModal = WithModal(UploadPost);

const PrivateRouteWithModal = (props) => {
  const [modalState] = useContext(UploadPostModalContext);
  return (
    <>
      {modalState.isOpen && <UploadPostModal />}
      <PrivateRoute {...props} />
    </>
  );
};

export default PrivateRouteWithModal;
