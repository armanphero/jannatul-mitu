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

export default function Home() {
  
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
