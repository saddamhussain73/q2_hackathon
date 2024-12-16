import Image from "next/image";
import HeroComponent from "./Components/HeroComponent";
import Features from "./Components/Features";
import ArrayMap from "./Components/products";
import JoinUs from "./Components/JoinUs";
import Features2 from "./Components/Features2";
import OurProducts from "./Components/OurProducts";

export default function Home() {
  return (
   <div>
    <HeroComponent />
    <Features />
    <ArrayMap />
    <JoinUs />
    <Features2 />
    <OurProducts />
   </div>
  );
}
