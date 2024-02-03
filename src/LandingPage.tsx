import React from 'react';
import FloatingBox from './FloatingBox';
import './LandingPage.css'; 
import react_logo from './images/react-logo.svg';
import discord_logo from './images/Discord-logo.png'

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">Projects</h1>
      </header>
      <main className="grid-container">
        {/* NEW PROJECTS GO HERE
            order them such that newer ones show up first, older ones go at the end
        */}
        <FloatingBox 
          mainText='This Website' 
          subText='Born in the midst of my jobhunt, I was brought to the attention that I needed a way to demonstrate what I have worked on and accomplished.' 
          imageURL={react_logo} 
          className="floating-box"></FloatingBox>

        <FloatingBox 
          mainText='Hybrid Face and Voice Authentication WebApp POC'
          subText='Final individual project written for CSCI379 - Introduction to Biometrics at Bucknell University.' 
          className="floating-box"></FloatingBox>

        <FloatingBox 
          mainText='AI Powered Discord Bot'
          subText='Originally born from the idea of a personal assistant chatbot using text-davinci-003 endpoint from OpenAI, now it is much more powerful and packed with useful features.'
          imageURL={discord_logo}
          className="floating-box"></FloatingBox>

        <FloatingBox 
          mainText='PokemonBattleFactory'
          subText='Final group project written for CSCI205 - Software Engineering at Bucknell University.' 
          className="floating-box"></FloatingBox>

      </main>
    </div>
  );
};

export default LandingPage;