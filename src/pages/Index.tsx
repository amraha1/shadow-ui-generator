import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-gradient">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;