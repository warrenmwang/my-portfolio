import React from 'react';
import FloatingBox from './FloatingBox';
import logo from './logo.svg'

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">Portfolio</h1>
      </header>
      <main>
        <FloatingBox mainText='Test1' subText='subtext 1' imageURL={logo} height="200px" width="300px"></FloatingBox>
        <FloatingBox mainText='Test2' subText='subtext 2' height="200px" width="300px"></FloatingBox>
      </main>
    </div>
  );
};

export default LandingPage;
