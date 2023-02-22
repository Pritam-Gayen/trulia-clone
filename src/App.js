// import logo from './logo.svg';
import React from "react"
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Home } from "./Components/Home/Home";
import { NavbarTop } from './Components/NavbarTop/NavbarTop';

function App() {
  return(
    <>
      <NavbarTop/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App;
