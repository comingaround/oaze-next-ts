import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import SliderOne from "./components/sliderOne/sliderOne";
import HeroTwo from "./components/heroTwo/heroTwo";
import GalleryTwo from "./components/GalleryTwo/GalleryTwo";
import SliderTwo from "./components/sliderTwo/SliderTwo";
import TextArea from "./components/TextArea/TextArea";
import HeroThree from "./components/HeroThree/HeroThree";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <SliderOne />
      <HeroTwo />
      <GalleryTwo />
      <SliderTwo />
      <TextArea />
      <HeroThree />
      <Footer />
    </main>
  );
}
