import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";

const CustomNavbar = () => (
  <aside
    className="sticky top-0 md:top-0 z-40 w-full backdrop-blur flex-none 
transition-colors duration-500 lg:z-50
lg:border-slate-900/10 dark:border-slate-50/[0.06]      
md:flex-shrink-0 md:mx-0 md:my-0 md:py-4 md:px-[2vw] 
sm:px-0 md:px-[10vw] 2xl:px-[20vw] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
  >
    <Navbar/>
  </aside>
);

function App() {
  return (
    <div className="dark:bg-[#1f2028] bg-white antialiased min-h-screen flex flex-col transition-all duration-900 bg-white dark:bg-[#1f2028] min-h-lvh">
      <CustomNavbar />
      <HomeSection />

    </div>
  );
}

export default App;
