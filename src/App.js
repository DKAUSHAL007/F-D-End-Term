import React,{useEffect,useState} from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomeComp/home";
import Demo from "./components/demo/demo";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn_SignOut/SignIn/signin";
import SignUp from "./components/SignIn_SignOut/SignUp/signup";
import { data } from "./components/data";
import MainPage from './components/MainPage/MainPage';
import About from './components/About/about';
import Abttutor from './components/AboutTutor/Abttutor';

function App() {
  const [tutors, setTutor] = useState(data);
  const [tutor, settutor] = useState({})

  console.log(tutor)
  // console.log(tutors)
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home tutors={tutors} />} />
        <Route path="/demo" element={<Demo tutors={tutors} />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MainPage" element={<MainPage settutor={settutor} tutors={tutors} />} />

        <Route path="/abouttutor" element={<Abttutor tutors={tutors} tutor={tutor} />} />

        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
