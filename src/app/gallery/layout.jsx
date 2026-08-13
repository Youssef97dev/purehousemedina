import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";

export default function GalleryLayout({ children }) {
  return (
    <div className="flex flex-col">
      {/* GLOBAL HEADER */}
      <Navbar path="/fr/gallery" second_path={"/es/galería"} change={true} />
      <Intro />

      {/* MAIN CONTENT */}
      <main>{children}</main>

      {/* GLOBAL FOOTER */}
      <Footer path="/fr/gallery" second_path={"/es/galería"} />

      {/* FLOAT BUTTON 
      <div className="fixed bottom-7 right-6 z-50">
        <ButtonWtsp />
      </div>*/}
    </div>
  );
}
