import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import HomeSection from "./components/Home/Home"

export default function Home() {
  return (
    <>
        <Intro />
        <Navbar/>
        <div>
            <HomeSection/>
        </div>
    </>
  );
}
