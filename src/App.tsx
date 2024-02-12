import React from 'react';
import avatar from './images/avatar.png'
import './App.css';
import TileHolder from './TileHolder';
import { TileData } from './Tile'
import ProjectContent from './ProjectContent';
import WorkExperienceContent from './WorkExperienceContent'

import ur5e from './images/ur5e.webp'
import react_logo from './images/react-logo.svg';
import discord_logo from './images/discord-icon.svg'
import biometrics_img from './images/facial_recognition.png'
import solving_heat_equ_img from './images/solving-heat-equations.png'
import web_crawler_img from './images/web_crawler.png'
import maze_img from './images/maze.png'
import pokemon_battlefactory from './images/pokemon_battlefactory.png'
import restapi_img from './images/restapi.svg'
import rss_img from './images/rss.png'
import repl_img from './images/repl.png'

import bucknell_logo from './images/bucknell_logo.png'
import saic_logo from './images/saic_logo.png'

import backend_logo from './images/backend.png'
import scientific_comp_logo from './images/scientific_computing.png'
import frontend_logo from './images/frontend.png'

function App() {
  // define project tiles
  const projectTilesData : TileData[] = [
    {
      mainText:'Camera Guided Robotic Arm',
      subText:'Senior Design Final Project',
      childNode: <ProjectContent project={{
        title: 'Cognex Machine Vision Camera guided UR5e Robotic Arm',
        date: '02/2024',
        authors:['Warren Wang', 'Doruk Ozar', 'Andrew Passero'],
        videoURL: 'https://youtube.com/shorts/AldaTJeaC5k',
        description:`No github is provided due to the signage of an NDA. Limited details
        can be conveyed, but this small group of Bucknell Seniors is *currently working*
        on a project whose goal is to have a camera detect an object and capture coordinates
        and depth information about said object, process that on a computer (doing some 
        potential image processing, coordinate transformation, etc.), then sending relevant 
        information to UR5e Robotic Arm via LAN Ethernet using a network switch. We aim
        design a hardware end effector that will be mounted to the wrist of our UR5e that
        will be used to interface with the said object.`
      }} />,
      imageURL:ur5e
    },
    {
      mainText:'This Website',
      subText:'Born in the midst of my jobhunt, I was brought to the attention that I needed a way to demonstrate what I have worked on and accomplished.' ,
      childNode: <ProjectContent project={{
        title:'This Portfolio Website',
        date:'02/03/2024',
        authors:['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/my-portfolio',
        description:`This project is this little website you are on that I've written 
        to sell myself to future employers and demonstrate my abilities as a programmer.`
      }} />,
      imageURL:react_logo,
    },
    {
      mainText:'AI Powered Discord Bot',
      subText:'Originally born from the idea of a personal assistant chatbot using text-davinci-003 endpoint from OpenAI, now it is much more powerful and packed with useful features.',
      childNode: <ProjectContent project={{
        title:'AI Powered Personal Assistant - Discord Bot',
        date:'01/2024',
        authors:['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/python_discord_bot',
        videoURL:'https://www.youtube.com/watch?v=KFOIwvz3dY4',
        description:`Discord bot interface for ChatGPT's API models (e.g. gpt-4-vision-preview, dalle3, etc.) and other custom commands I've written to serve mainly an userbase of size n=1 (myself).
        I work on this off and on, where I'm pushing mostly minor changes for things that I would personally like to see integrated into
        the bot such that I gain value from it. To be honest, in the current state that the bot is in, I use it very often
        and it already has changed my life (cliche, I know). It's the little things in life that make a world of difference.`
      }} />,
      imageURL:discord_logo
    },
    {
      mainText:'Hybrid Face and Voice User Authentication',
      subText:'Final individual project written for CSCI379 - Introduction to Biometrics at Bucknell University.' ,
      childNode: <ProjectContent project={{
        title:'Hybrid Face and Voice Authentication For Student Attendance WebApp Proof of Concept',
        date:'12/2023',
        authors:['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/hybrid-face-voice-attendance-system',
        videoURL:'https://www.youtube.com/watch?v=T4OJqnAoNrc',
        description:`A basic web app made with only HTML, CSS, JS on the frontend and a Python only backend (Flask for web server, common scientific computing libs for image processing). No database standard was used, as only a simple file-based db worked for this proof of concept demonstration.`
      }} />,
      imageURL:biometrics_img,
    },
    {
      mainText:'Solving Simple Second Order ODE with FEM',
      subText:'Final Project of Numerical Analysis course',
      childNode: <ProjectContent project={{
        title: 'Applying Finite Element Methods (FEM) to solve for the solution for a second order (ordinary) differential equation',
        date: '12/2023',
        authors:['Warren Wang', 'Georgia Corbett'],
        githubLink:'https://github.com/warrenmwang/solving-heat-equations',
        description:`Project for a Numerical Analysis course, basically learned to use the FEM to solve 
        for the solution to an arbitrary second order ordinary differential equation. Originally intent was
         to look into solving heat equations, rescoped due to time constraints.`,
      }} />,
      imageURL:solving_heat_equ_img
    },
    {
      mainText:'JS Web Crawler',
      subText:`A web crawler written in JavaScript. Part of Boot.dev's learn by doing curriculum.`,
      childNode: <ProjectContent project={{
        title: 'JS Web Crawler',
        date: '07/16/2023',
        authors:['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/web_crawler',
        videoURL:'https://www.youtube.com/watch?v=xoyJDAV75yQ',
        description:`A web crawler written in JavaScript. Part of Boot.dev's learn by doing curriculum.`
      }} />,
      imageURL:web_crawler_img
    },
    {
      mainText:'RSS/Atom Blog Feed Aggregator',
      subText: `For people who like to be updated on the blogs that they keep up with, having 
      an aggregator program that can pull updates from multiple blogs is very helpful.`,
      childNode: <ProjectContent project={{
        title: 'RSS/Atom Blog Feed Aggregator',
        date: '06/2023',
        authors: ['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/go_blog_aggregator',
        description:`
        An rss blog feed aggregator. Users create accounts. Users authenticate. Users then can create feeds that they want to keep in touch with (give url of blog rss). Then the server will automatically fetch the feeds from the website and parse through the xml received to know what posts the blog has. The User will then be able to retrieve all the posts that they would care about from their blogs. Users choose what blogs to care about through the feed_follows. That is their option to opt-in or opt-out of blog feeds that they would like to follow. The Go Webserver communicates with a PostgresSQL database.`
      }} />,
      imageURL: rss_img
    },
    {
      mainText: 'Golang Pokedex API CLI Explorer',
      subText: `A CLI REPL that let's you explore the Poke API written in Go.`,
      childNode: <ProjectContent project={{
        title: 'Golang Pokedex API CLI Explorer',
        date: '04/2023',
        authors: ['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/pokedex-cli',
        videoURL:'https://www.youtube.com/watch?v=PXCY4iwJ3j8',
        description: `CLI REPL interacting with pokeapi.`
      }} />,
      imageURL: repl_img
    },
    {
      mainText: 'Golang HTTP REST API Backend',
      subText: 'REST API Backend written in Go for a simulated very basic social media frontend of which does not exist.',
      childNode: <ProjectContent project={{
        title: 'Golang Social Media Backend',
        date: '01/2023',
        authors:['Warren Wang'],
        githubLink:'https://github.com/warrenmwang/go-social-media-backend',
        videoURL:'https://www.youtube.com/watch?v=3sOcQf55rn8',
        description: 'This is a small project to help me learn Go and how to write a RESTful API that handles HTTP Requests.'
      }} />,
      imageURL: restapi_img
    },
    {
      mainText:'Python Maze Solver Visualization',
      subText:'Reviewing DFS and BFS, why not use it to create visualizations of solving simple mazes.',
      childNode: <ProjectContent project={{
        title: 'Python Maze Solver Visualization',
        date: '12/2022',
        authors: ['Warren Wang'],
        githubLink: 'https://github.com/warrenmwang/python_maze_solver',
        videoURL:'https://www.youtube.com/watch?v=MqK8s8vZcgU',
        description:`Working through some courses on Boot.dev, this was one of their projects that I did. It was good review of DFS and BFS.`
      }} />,
      imageURL:maze_img
    },
    {
      mainText:'PokemonBattleFactory',
      subText:'Final group project written for CSCI205 - Software Engineering at Bucknell University.' ,
      childNode: <ProjectContent project={{
        title:'Pokemon BattleFactory',
        date:'05/09/2022 (last commit)',
        authors:['Warren Wang', 'Nate Ahearn', 'Quan Zhou', 'Ruitong Jiang'],
        githubLink:'https://github.com/warrenmwang/csci205finalproject',
        videoURL:'https://www.youtube.com/watch?v=SMF7EGaU1oI',
        description:'CSCI205 Final Project: Pokemon BattleFactory. Written in Java. Sprites are pulled from a webserver, only part that requires internet access (should be up until May 2024 at least). \n\n Tile thumbnail credit: https://bulbapedia.bulbagarden.net/wiki/Battle_Factory_(Generation_III)'
      }} />,
      imageURL:pokemon_battlefactory
    }
  ];

  // define work experience tiles
  const workExperienceTilesData : TileData[] = [
    {
      mainText: 'Teaching Assistant',
      subText: 'Algorithms TA @ Bucknell University',
      childNode: <WorkExperienceContent work={{
        jobRole: 'Teaching Assistant',
        company: 'Bucknell University - Department of Computer Science',
        startDate: '09/2023',
        endDate: '12/2023',
        location: 'Lewisburg, PA',
        companyLink: 'https://www.bucknell.edu/',
        description: '• Encourage algorithmic thinking and intuition in how algorithms process inputs\n• Guide students through problem sets with mathematical thinking in correctness and complexity proofs\n• Grade and provide thoughtful individually tailored feedback on homework problem sets'
      }}></WorkExperienceContent>,
      imageURL:bucknell_logo
    },
    {
      mainText: 'Modeling & Simulation Engineer Intern',
      subText: 'Science Applications International Corp. (SAIC)',
      childNode: <WorkExperienceContent work={{
        jobRole: 'Modeling & Simulation Engineer Intern',
        company: 'SAIC',
        startDate: '06/2023',
        endDate: '08/2023',
        location: 'El Segundo, CA',
        companyLink: 'https://www.saic.com/',
        description: `• Modeling, simulation, & analysis in support of United States Space Force acquisition decision process. Integrated space mission simulation tools into an automated system-level trade study execution architecture utilizing Ansys/Phoenix ModelCenter\n• Created CLI Python scripts to query space-track.org REST API and ingest into SQLite3 database\n• Utilized MATLAB’s machine learning toolboxes and KNN classifiers to distinguish existence of maneuvers from Two Line Elements (TLEs), orbital elements tabular data\n• Employed Multi-Disciplinary Analysis Optimization (MDAO) methodology to define and execute an orbital debris remediation trade study. Utilized ModelCenter to implement a weighted objective function to find a system configuration optimized for cost and maneuvering performance.\n• Simulated launch, mission maneuvering, and debris remediation techniques with MATLAB, Python, and Ansys/AGI Systems Toolkit (STK)\n• Provided weekly written status reports and weekly demonstrations of progress to leadership team. Presented final report to company leadership and USSF customer\n• Utilized Agile Kanban and Atlassian Jira for all task assignments and wrote extensive documentation on Atlassian Confluence\n• Utilized Atlassian Confluence and Microsoft Teams for collaboration and documentation.`
      }}></WorkExperienceContent>,
      imageURL:saic_logo
    },
    {
      mainText: 'Research Assistant',
      subText: 'Tutelage under Prof. Joshua Stough at Bucknell University',
      childNode: <WorkExperienceContent work={{
        jobRole: 'Research Assistant',
        company: 'Bucknell University -- Healthcare Inventors Technology Program (HTIP)',
        startDate: '05/2022',
        endDate: '08/2022',
        location: 'Lewisburg, PA',
        companyLink: 'https://www.bucknell.edu/',
        description: `\n• Utilized Pytorch, NumPy, Matplotlib, and other Python libraries to investigate applicability of motion tracking vector fields on AP4 LV image segmentations under mentorship of a professor\n• Calculated global and regional longitudinal strain metrics using motion tracking vector fields\n• Created data visualizations (histograms, linear regression) summarizing summer work, culminating in a poster: http://eg.bucknell.edu/~jvs008/research/cardiac/posters/2022_Wang_Motion_Tracking_Poster.pdf`
      }}></WorkExperienceContent>,
      imageURL:bucknell_logo
    },
    {
      mainText: 'Calculus II and III Tutor',
      subText: 'Math tutoring at Bucknell University.',
      childNode: <WorkExperienceContent work={{
        jobRole: 'Calculus II and III Tutor',
        company: 'Bucknell University -- Teaching and Learning Center (TLC)',
        startDate: '01/2022',
        endDate: '05/2022',
        location: 'Lewisburg, PA',
        companyLink: 'https://www.bucknell.edu/',
        description: `\n• Encouraged autodidacticism and inquisitiveness of students to approach problems from different angles\n• Helped students to understand course material at their own individual conceptual level`
      }}></WorkExperienceContent>,
      imageURL:bucknell_logo
    },
    {
      mainText: 'Physics I Study Group Facilitator',
      subText: 'Physics I help session facilitator at Bucknell University',
      childNode: <WorkExperienceContent work={{
        jobRole: 'Physics I Study Group Facilitator',
        company: 'Bucknell University -- Teaching and Learning Center (TLC)',
        startDate: '09/2021',
        endDate: '12/2021',
        location: 'Lewisburg, PA',
        companyLink: 'https://www.bucknell.edu/',
        description: `\n• Developed students’ mastery of introductory physics concepts to help them succeed in their course\n• Fostered students’ ability to ask questions and collaborate amongst peers effectively`
      }}></WorkExperienceContent>,
      imageURL:bucknell_logo
    },
  ];

  // define toolbelt tiles
  const toolbeltTilesData : TileData[] = [
    {
      mainText: 'Backend',
      subText: "Go, Python, Docker, Bash, SQL",
      imageURL: backend_logo
    },
    {
      mainText: 'Scientific Computing',
      subText: "Python (NumPy, OpenCV, Matplotlib, Pandas, Seaborn, Jupyter, Tensorflow/Keras, Pytorch), MATLAB",
      imageURL: scientific_comp_logo
    },
    {
      mainText: 'Frontend',
      subText: "React, Typescript, TailwindCSS, HTML, CSS, Javascript",
      imageURL: frontend_logo
    }
  ];

  return (
    <div className="App">
        {/* Intro Header Block */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Hello, I'm</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Warren Wang</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">I'm an aspiring software engineer and currently a senior student at Bucknell University studying computer science. This website acts as my public portfolio.</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {/* work experience */}
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                        Work Experience.
                      </dt>
                      <dd className="inline"> Where I've been. </dd>
                    </div>
                    {/* projects */}
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                        Projects.
                      </dt>
                      <dd className="inline"> Made with love for school, hobbies, or one-off showerthoughts.</dd>
                    </div>
                    {/* toolbelt */}
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" clip-rule="evenodd" />
                        </svg>
                        Toolbelt. 
                      </dt>
                      <dd className="inline"> My preferences of tools that I know and love to use to get any job done.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <a href='https://www.linkedin.com/in/warrenmwang' target="blank_" rel="noopener noreferrer">
                <img src={avatar} alt="Cartoon Avatar Self" className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10" />
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <TileHolder titleText='Work Experience' tiles={workExperienceTilesData}></TileHolder>

        {/* Projects */}
        <TileHolder titleText='Projects' tiles={projectTilesData}></TileHolder>

        {/* Toolbelt */}
        <TileHolder titleText='Toolbelt' tiles={toolbeltTilesData}></TileHolder>

        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
        {/* <!--Footer container--> */}
        <footer>
          {/* image usage notice */}
          <div className='text-center justify-center mt-6 text-lg text-gray-600'>
            Images on this site are generated by DALL·E 3 or are in the public domain unless otherwise noted.
          </div>
          {/* contacts */}
          <div className="flex flex-col items-center bg-white text-center text-white dark:bg-white">
            <div className="container pt-9">
              <div className="mb-9 flex justify-center">
                {/* facebook */}
                {/* <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="#4f46e5"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a> */}
                {/* twitter / x.com */}
                {/* <a href="" target="_blank" rel="noopener noreferrer" className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="#4f46e5"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a> */}
                {/* insta */}
                {/* <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="#4f46e5"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a> */}
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/warrenmwang" target="_blank" rel="noopener noreferrer" className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="#4f46e5"
                    viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                {/* github */}
                <a href="https://github.com/warrenmwang" target="_blank" rel="noopener noreferrer" className="text-neutral-800 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="#4f46e5"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>

  );
}

export default App;