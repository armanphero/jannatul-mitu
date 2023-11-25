import About from "../../About/About";
import ChooseMe from "../../ChooseMe/ChooseMe";
import Contact from "../../Contact/Contact";
import Corousel from "../../Corousel/Corousel";
import Prices from "../../Prices/Prices";
import Services from "../../Services/Services";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])
  return (
    <>
      <HeroSection />
      <ChooseMe></ChooseMe>
      <About></About>
      <Services></Services>
      <Prices></Prices>
      <Corousel></Corousel>
      <Contact></Contact>
      {/* <MyPortfolio /> */}
      {/* <ContactMe /> */}
      <Footer />
    </>
  );
}
