
import React from "react";
import TopBar from "./Components/TopBar/TopBar";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Activities from "./Components/Activities/Activities";
import Booking from "./Components/Booking/Booking";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return <>
    <TopBar />
    <Navbar />
    <Hero /> 
    <Activities />
    <Booking />
    <Gallery />
    <Contact />
    <Footer/>
  </>
}

export default App;
