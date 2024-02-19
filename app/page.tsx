import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/slider/slider";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import SliderOne from "./components/sliderOne/sliderOne";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <SliderOne />
    </main>
  );
}
