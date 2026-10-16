import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Categories from "./Categories";
import Info from "./Info";
import Features from "./Features";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationGuide from "@/components/home/LocationGuide";
import Attractions from "@/components/home/Attractions";
import FaqSection from "@/components/home/FaqSection";
import BookingCtaBand from "@/components/home/BookingCtaBand";
import Map from "./Map";
import Footer from "./Footer";
import ButtonWtsp from "@/components/ButtonWtsp";
import GoogleReviews from "@/components/GoogleReviews";
import ButtonBook from "@/components/ButtonBook";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/"} second_path={"/es/"} />
      <Hero />
      <About />
      <Categories />
      <Info />
      <Features />
      <WhyChooseUs locale="fr" />
      <LocationGuide locale="fr" />
      <Attractions locale="fr" />
      <FaqSection locale="fr" />
      <BookingCtaBand locale="fr" />
      <GoogleReviews
        title="Ce que disent nos clients"
        subtitle="Avis de nos clients"
        text_="Avis Google"
        link_="Voir tous les avis sur Google"
      />
      <Map />
      <div className="w-[80%] lg:w-full h-[1px] bg-riad_secondary mx-auto"></div>
      <Footer path={"/"} second_path={"/es/"} />

      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
      <ButtonBook text={"Réserver"} />
    </div>
  );
};

export default Loader;
