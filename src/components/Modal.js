import React from 'react';

import { useAppContext } from '../context/appContext';
import '../assets/css/Modal.scss';
import { Contact } from '../pages';

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'blue',
  'z-index': 999
};

const Modal = () => {
  const { toggleModal, showModal } = useAppContext();
  if (showModal) {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="body">
            <Contact />
          </div>
          {/* <button onClick={toggleModal} className="btn btn-block">
            Hide Me
          </button> */}
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
