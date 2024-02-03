import React from 'react';

type BoxInputParams = {
  mainText: string;
  subText: string;
  imageURL?: string; // Optional image URL
  height?: string; // Optional height
  width?: string;  // Optional width
};

// TODO: should show
// Title, subtext, image (optional)
// be clickable with maybe some kind of dynamic response when the mouse is hovering over it
// if there is a post about the project on the card, it can be clicked to bring the user to a
// post about the project

const FloatingBox: React.FC<BoxInputParams> = ({ mainText, subText, imageURL , height = 'auto', width = 'auto'}) => {
  const cardStyle = {
    height: height,
    width: width,
  };

  return (
    <div style={cardStyle} className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {imageURL && (
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={imageURL} alt="Project" />
        </div>
      )}
      <div>
        <div className="text-xl font-medium text-black">{mainText}</div>
        <p className="text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default FloatingBox;