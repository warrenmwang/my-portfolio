import React, { useState } from 'react';
import Modal from './Modal';

type ButtonToModalParams = {
  buttonText: string;
  children: React.ReactNode; // Accept any valid React node as children
};

const ButtonToModal: React.FC<ButtonToModalParams> = ({ buttonText, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="absolute top-4 right-4 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
      >
        {buttonText}
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} children={children}></Modal>
      )}
    </div>
  );
};

export default ButtonToModal;