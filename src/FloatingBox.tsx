import React from 'react';

type MainPageProps = {
  mainText: string;
  subText: string;
};

const MainPage: React.FC<MainPageProps> = ({ mainText, subText }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">{mainText}</div>
        <p className="text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default MainPage;
