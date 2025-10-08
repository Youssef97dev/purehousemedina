import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Categories from "./Categories";
import Info from "./Info";
import Features from "./Features";
import Map from "./Map";
import Footer from "./Footer";
import ButtonWtsp from "./ButtonWtsp";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr"} />
      <Hero />
      <About />
      <Categories />
      <Info />
      <Features />
      <Map />
      <div className="w-[80%] lg:w-full h-[1px] bg-riad_secondary mx-auto"></div>
      <Footer path={"/fr"} />

      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
