import NavHeader from "@/components/NavHeader";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavHeader />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;