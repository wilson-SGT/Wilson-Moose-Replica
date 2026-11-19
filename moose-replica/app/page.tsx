import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import HomeSection from "./components/Home/Home"
import AboutSection from "./components/About/About"
import FeaturesSection from "./components/Features/Features"
import AddFeaturesSection from "./components/AddFeatures/AddFeatures"

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
            <FeaturesSection/>
        </div>
    </>
  );
}
