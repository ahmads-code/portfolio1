import "./App.css";
import AboutUsSection from "./components/AboutUs";
import ContactUsSection from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ServiceSection from "./components/Services";
import TestimonialsSection from "./components/Testimonials";

function App() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Projects />
      <AboutUsSection />
      <TestimonialsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
