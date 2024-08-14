import React from "react";
import "./App.css";
import ATCPSection from "./components/ATCP/ATCPSection";
import CoreCardSection from "./components/card/coreCardSection/CoreCardSection";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/footer/Footer";
import Hero from "./components/HeroSection/Hero";
import LoveByTec from "./components/LovedByTec/LoveByTec";
import NavBar from "./components/NavBar/NavBar";
import NotStandardSection from "./components/NotStandard/NotStandardSection";
import PriceCard from "./components/price/PriceCard";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ATCPSection />
      <CoreCardSection />
      <NotStandardSection />
      <LoveByTec />
      <PriceCard />
      <Faq />

      <Footer />

      <div
        className={` w-[100%] h-[100%] overflow-hidden absolute top-0 left-0 opacity-50 bg-[radial-gradient(at_top_left,_#4f1d9e_30%,_transparent_80%),_radial-gradient(at_bottom,_#2ab4d9_0%,_transparent_60%),_radial-gradient(at_bottom_left,_#2ab4d9_0%,_transparent_50%),_radial-gradient(at_top_right,_#1d979e,_transparent),_radial-gradient(at_bottom_right,_#4f1d9e_0%,_transparent_50%)] bg-blend-saturation`}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-[linear-gradient(0deg,_#171a1d_30%,_transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default App;
