
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode; // Accept any valid React node as children
}

const Modal: React.FC<ModalProps> = ({ onClose, children}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // note arbitrarily set z-index of modal to be a high number (50) to ensure it is on top of 
    // other elements -- `z-50` in className
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={handleOverlayClick} // Add the onClick event here
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
        {children}
        <div className="items-center px-4 py-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;