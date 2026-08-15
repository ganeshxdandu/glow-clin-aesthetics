import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyGlow from "@/components/WhyGlow";
import ClinicSpaces from "@/components/ClinicSpaces";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyGlow />
        <ClinicSpaces />
        <Reviews />
        <InstagramSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
