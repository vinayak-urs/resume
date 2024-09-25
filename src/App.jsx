import HomeSection from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="dark" >
      {/* <CustomCursor/> */}
      <Navbar />
      <HomeSection />
      <Links />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
