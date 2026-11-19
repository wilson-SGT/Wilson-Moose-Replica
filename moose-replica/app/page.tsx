import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import HomeSection from "./components/Home/Home"
import AboutSection from "./components/About/About"
import FeaturesSection from "./components/Features/Features"
import AddFeaturesSection from "./components/AddFeatures/AddFeatures"
import BenefitsSection from "./components/Benefits/Benefits"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <>
        <Intro/>
        <Navbar/>
        <div>
            <HomeSection/>
            <AboutSection/>
            <FeaturesSection/>
            <AddFeaturesSection/>
            <BenefitsSection/>
        </div>
        <Footer/>
    </>
  );
}
