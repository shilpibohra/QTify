//import { useEffect, useState } from "react";
import "./App.css";
//import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
//@ts-ignore
import Navbar from "./components/Navbar/Navbar";
//import { fetchTopAlbums } from "./components/api/api";
//import Section from "./components/Sections/Section";
function App() {
return (
  <div className="App">
    <Navbar />
    <Hero />
    </div>
);
}

export default App;
