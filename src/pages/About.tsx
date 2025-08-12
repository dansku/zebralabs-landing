import NavHeader from "@/components/NavHeader";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black flex flex-col">
      <NavHeader />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;