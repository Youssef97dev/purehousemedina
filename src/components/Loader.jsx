import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Categories from "./Categories";
import Info from "./Info";
import Features from "./Features";
import Map from "./Map";
import Footer from "./Footer";
import ButtonWtsp from "./ButtonWtsp";
import GoogleReviews from "./GoogleReviews";
import ButtonBook from "./ButtonBook";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr"} second_path={"/es"} />
      <Hero />
      <About />
      <Categories />
      <Info />
      <Features />
      <GoogleReviews
        title="What Our Guests Say"
        subtitle="Guest Reviews"
        text_="Google Reviews"
        link_="Read all reviews on Google"
      />
      <Map />
      <div className="w-[80%] lg:w-full h-[1px] bg-riad_secondary mx-auto"></div>
      <Footer path={"/fr"} second_path={"/es"} />

      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
      <ButtonBook />
    </div>
  );
};

export default Loader;
