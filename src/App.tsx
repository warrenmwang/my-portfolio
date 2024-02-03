import React from 'react';
import avatar from './images/avatar.png'
import './App.css';
import TileHolder from './TileHolder';
import { TileData } from './Tile'

import react_logo from './images/react-logo.svg';
import discord_logo from './images/discord-icon.svg'
import biometrics_img from './images/facial_recognition.png'
import pokemon_battlefactory from './images/pokemon_battlefactory.png'

function App() {

  // define project tiles
  const tilesData : TileData[] = [
    {
      mainText:'This Website',
      subText:'Born in the midst of my jobhunt, I was brought to the attention that I needed a way to demonstrate what I have worked on and accomplished.' ,
      project: {
        title:'title',
        date:'date',
        authors:['warren'],
        githubLink:'githublink',
        description:'description'
      },
      imageURL:react_logo,
    },
    {
      mainText:'Hybrid Face and Voice Authentication WebApp POC',
      subText:'Final individual project written for CSCI379 - Introduction to Biometrics at Bucknell University.' ,
      project: {
        title:'title',
        date:'date',
        authors:['warren'],
        githubLink:'githublink',
        description:'description'
      },
      imageURL:biometrics_img,
    },
    {
      mainText:'AI Powered Discord Bot',
      subText:'Originally born from the idea of a personal assistant chatbot using text-davinci-003 endpoint from OpenAI, now it is much more powerful and packed with useful features.',
      project: {
        title:'title',
        date:'date',
        authors:['warren'],
        githubLink:'githublink',
        description:'description'
      },
      imageURL:discord_logo
    },
    {
      mainText:'PokemonBattleFactory',
      subText:'Final group project written for CSCI205 - Software Engineering at Bucknell University.' ,
      project: {
        title:'title',
        date:'date',
        authors:['warren'],
        githubLink:'githublink',
        description:'description'
      },
      imageURL:pokemon_battlefactory
    }
  ]

  return (
    <div className="App">
      <header >
      <div className="relative">
        {/* TODO: this should link to about me page */}
        <a href="#" className="absolute top-4 right-4 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">About Me / Socials</a>
      </div>

        {/* Header Block */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Hello, I'm</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Warren Wang</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">I'm an aspiring software engineer and currently a senior student at Bucknell University studying computer science. This website acts as my public portfolio.</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                        Projects.
                      </dt>
                      <dd className="inline"> Made with love for school, hobbies, or one-off showerthoughts.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" clip-rule="evenodd" />
                        </svg>
                        Toolbelt. 
                      </dt>
                      <dd className="inline"> My preferences of tools that I know and love to use to get any job done.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                        Work Experience.
                      </dt>
                      <dd className="inline"> Where I've been has made me who I am. </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <img src={avatar} alt="Product screenshot" className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10" />
            </div>
          </div>
        </div>
      </header>

      <body>
        {/* Projects */}
        <TileHolder tiles={tilesData}></TileHolder>

        {/* TODO: */}
        {/* Toolbelt */}

        {/* TODO: */}
        {/* Work Experience */}
      </body>
    </div>

  );
}

export default App;
