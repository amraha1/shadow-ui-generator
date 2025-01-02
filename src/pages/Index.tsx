import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-gradient">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <OurWork />
    </div>
  );
};

export default Index;