import React, { createContext, useReducer } from 'react';

export const UploadPostModalContext = createContext(false);

export const ACTIONS = {
  CLOSE_MODAL: 'close_modal',
  OPEN_CREATE_MODAL: 'open_create_modal',
  OPEN_UPDATE_MODAL: 'open_update_modal',
};

export const MODAL_TYPES = {
  CREATE: 'create',
  UPDATE: 'update',
  NONE: null,
};

function reducer(modalState, action) {
  switch (action.type) {
    case ACTIONS.CLOSE_MODAL:
      return { type: MODAL_TYPES.NONE, isOpen: false };
    case ACTIONS.OPEN_CREATE_MODAL:
      return { type: MODAL_TYPES.CREATE, isOpen: true };
    case ACTIONS.OPEN_UPDATE_MODAL:
      return { type: MODAL_TYPES.UPDATE, isOpen: true };
    default:
      throw new Error('Modal Context: Unsupported action');
  }
}

const initialModalState = {
  type: MODAL_TYPES.NONE,
  isOpen: false,
};

const ModalContext = ({ children }) => {
  const [modalState, dispatch] = useReducer(reducer, initialModalState);

  return (
    <UploadPostModalContext.Provider value={[modalState, dispatch]}>
      {children}
    </UploadPostModalContext.Provider>
  );
};

export default ModalContext;
