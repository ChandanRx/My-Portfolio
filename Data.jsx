import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { BsCircleFill } from 'react-icons/bs'

import fileshare from './assets/Images/fileshare.png'
import gamelist from './assets/Images/Gamelist.png'
import weather from './assets/Images/Weather.png'
import todo from './assets/Images/todo.png'
import myrecom from './assets/Images/Myrecom.png'
import guitar from './assets/Images/GuitarApp.png'
import foodapp from './assets/Images/foodApp.jpg'
import fitness from './assets/Images/Fitness.jpg'
import chatApp from './assets/Images/ChatApp.jpg'
import expendigo from  './assets/Images/Expendigo.jpg'
import playsgo from  './assets/Images/playsgo.png'
import movie from  './assets/Images/movie.png'

export const skills = [
    {
        title: 'Javascript',
        about: 'Programming language used to creating dynamic and interactive elements on web pages',
        Icon: IoLogoJavascript
    },
    {
        title: 'React Js',
        about: 'Programming language used to creating dynamic and interactive elements on web pages',
        Icon: RiReactjsFill
    },
    {
        title: 'Node Js',
        about: 'Node js is a javascript runtime environment that allows developers to run javascript code outside of web browser',
        Icon: FaNodeJs
    },
    {
        title: 'Express Js',
        about: 'Express js is a minimal and flexible web application framework for node.js',
        Icon: SiExpress
    }, {
        title: 'Next Js',
        about: 'Next Js is a framework for building server-rendered React Application',
        Icon: TbBrandNextjs
    },
    {
        title: 'React Native',
        about: 'React Native is a framework for building mobile applications using javascript and React',
        Icon: TbBrandReactNative
    },
]

export const languages = [

    {
        name: 'Javascript',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'React Js',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Node Js',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Express Js',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Next Js',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'React Native',
        level: '75%',
        Icon: BsCircleFill
    },

]

export const Tools = [
    {
        Icon: BsCircleFill,
        name: 'Visual Studio Code',
        level: '80%'
    },
    {
        Icon: BsCircleFill,
        name: 'MongoDB Compass',
        level: '70%'
    },
    {
        Icon: BsCircleFill,
        name: 'Postman',
        level: '75%'
    },
    {
        Icon: BsCircleFill,
        name: 'Git',
        level: '60%'
    },
    {
        Icon: BsCircleFill,
        name: 'Expo Go(React Native)',
        level: '80%'
    },

]

export const projects = [

    {
        id:1,
        name: "Food Delivery App (UI)",
        description: "In this App i make a beautiful UI of food delivery app where some functionality of choose restaurants, select food to delivery",
        image_path: foodapp,
        deployed_url: '',
        github_url: 'https://github.com/ChandanRx/Food_Delivery_App',
        category: ["react native"],
        key_techs: ["React Native", "Sanity Io", "Redux Toolkit", "React Navigation"]
    },
    {
        id:2,
        name: "Fitness App",
        description: "a fitness app where you can find exercise by body parts by details of how to do it.",
        image_path: fitness,
        deployed_url: '',
        github_url: 'https://github.com/ChandanRx/Fitness-App',
        category: ["react native"],
        key_techs: ["React Native", "Expo Router","React Native Reanimated"]
    },
    {
        id:3,
        name: "Chat App",
        description: "a chat app where you can chat with your friends through this app by creating a account and chat just as like whats app",
        image_path: chatApp,
        deployed_url: '',
        github_url: 'https://github.com/ChandanRx/ChatApp_ReactNative',
        category: ["react native"],
        key_techs: ["React Native", "Expo Router","Firebase"]
    },
    {
        id:4,
        name: "Expendigo",
        description: "Expendigo app where you can store your travel or any expenses records",
        image_path: expendigo,
        deployed_url: '',
        github_url: 'https://github.com/ChandanRx/Expendigo-ReactNative',
        category: ["react native"],
        key_techs: ["React Native", "Expo Router","Firebase"]
    },
    {
        id:5,
        name: "Filesharing App",
        description: "basic filesharing app where you can upload a file and it will generate a link of that uploaded file , you can copy and share it with anyone or you can send through mail by this app",
        image_path: fileshare,
        deployed_url: 'https://sharefilesy.vercel.app/',
        github_url: 'https://github.com/ChandanRx/Share_Filesy_Frontend',
        category: ["next", "node"],
        key_techs: ["Next", "Node", "Express"]
    },
    {
        id:6,
        name: "Plays go",
        description: "in this app you can search or post for sports that you want to play as well as you can find nearby players",
        image_path: playsgo,
        deployed_url: 'https://playsgo.vercel.app/',
        github_url: 'https://github.com/ChandanRx/playsgo',
        category: ["next"],
        key_techs: ["Next","Firebase"]
    },
    {
        id:7,
        name: "Movie Search App",
        description: "Movie search app where you can search any movies name and movie's details",
        image_path: movie,
        deployed_url: 'https://movie-namefind.netlify.app/',
        github_url: 'https://github.com/ChandanRx/movie_search_app',
        category: ["react"],
        key_techs: ["React"]
    },
    {
        id:8,
        name: "Game Listing App",
        description: "game listing app where you can see top games name and their ratings.you can find games through search by genre",
        image_path: gamelist,
        deployed_url: 'games-listing-app-rosy.vercel.app',
        github_url: 'https://github.com/ChandanRx/GamesListingApp',
        category: ["react"],
        key_techs: ["React"]
    },
    {
        id:9,
        name: "Weather App",
        description: "This shows a weather tempreture of city's which you search",
        image_path: weather,
        deployed_url: 'weather-app-virid-sigma.vercel.app',
        github_url: 'https://github.com/ChandanRx/Weather_App',
        category: ["react"],
        key_techs: ["React"]
    },
    {
        id:10,
        name: "ToDo List App",
        description: "A simple to do list list app where you can add , remove and edit your tasks",
        image_path: todo,
        deployed_url: 'https://todo-app-eta-coral.vercel.app/',
        github_url: 'https://github.com/ChandanRx/todo-app',
        category: ["react"],
        key_techs: ["React"]
    },
    {
        id:11,
        name: "MyRecomShows",
        description: "in this site i share a details of my recommanded shows and provided link of those shows",
        image_path: myrecom,
        deployed_url: 'my-recom-shows.vercel.app',
        github_url: 'https://github.com/ChandanRx/MyRecomShows',
        category: ["react"],
        key_techs: ["React"]
    },
    {
        id:12,
        name: "Guitar Chords",
        description: "in this simple guitar chords app , all basic minor and major chords of guitar sounds and a section where you learn guitar",
        image_path: guitar,
        deployed_url: 'guitar-chords-eta.vercel.app',
        github_url: 'https://github.com/ChandanRx/Guitar_chords',
        category: ["Javascript"],
        key_techs: ["Javascript"]
    },
    

] 