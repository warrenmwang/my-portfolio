import React, { useState } from 'react';
import './TileHolder.css' // for tile style

/* TODO: add optional params for 
1. video embedding (youtube)
2. a single image
3. Link to a longer blog post if I actually wrote one (not gonna happen)? 
*/
export interface TileData {
  mainText: string;
  subText: string;
  project: Project;
  imageURL?: string;
}

interface Project {
  title: string;
  date: string;
  authors: string[];
  githubLink?: string;
  description: string;
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={handleOverlayClick} // Add the onClick event here
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-align">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{project.title}</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{project.date}</p>
            <p className="text-sm text-gray-500">{project.authors.join(', ')}</p>
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-sm text-blue-500">GitHub Link</a>}
            <p className="mt-4 text-sm text-gray-500">{project.description}</p>
          </div>
        </div>
        <div className="items-center px-4 py-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

type TileInputParams = {
  mainText: string;
  subText: string;
  project: Project; // project details if tile is used to point to a project
  imageURL?: string; // Optional image URL
  className?: string; // Optional className to change size usually
};

const Tile: React.FC<TileInputParams> = ({ mainText, subText, project, imageURL, className }) => {
  const [showModal, setShowModal] = useState(false);

  return (
      <div>
        <div onClick={() => setShowModal(true)} className="cursor-pointer">

          <div className={`p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer tile ${className}`}>
            {imageURL && (
              <div className="flex-shrink-0">
                <img className="h-24 w-24" src={imageURL} alt="Project" />
              </div>
            )}
            <div>
              <div className="text-xl font-medium text-black">{mainText}</div>
              <p className="text-gray-500">{subText}</p>
            </div>
          </div>

        </div>
        {showModal && <Modal project={project} onClose={() => setShowModal(false)} />}
      </div>

  );
};

export default Tile;