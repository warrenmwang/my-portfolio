import React, { ReactNode, useState } from 'react';
import './TileHolder.css' // for tile style
import Project from './ProjectContent';
import Modal from './Modal'


/* TODO: add optional params for 
1. video embedding (youtube)
2. a single image
3. Link to a longer blog post if I actually wrote one (not gonna happen)? 
*/
export interface TileData {
  mainText: string;
  subText: string;
  imageURL?: string;
  childNode: React.ReactNode;
}

type TileInputParams = {
  mainText: string;
  subText: string;
  childNode: React.ReactNode;
  imageURL?: string; // Optional image URL
  className?: string; // Optional className to change size usually
};

const Tile: React.FC<TileInputParams> = ({ mainText, subText, childNode, imageURL, className }) => {
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
        {showModal && <Modal children={childNode} onClose={() => setShowModal(false)} />}
      </div>

  );
};

export default Tile;