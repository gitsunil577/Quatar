import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
    </>
  );
}
