import NavHeader from "@/components/NavHeader";
import FeaturesSection from "@/components/FeaturesSection";
import SimpleFooter from "@/components/SimpleFooter";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black flex flex-col">
      <NavHeader />
      <FeaturesSection />
      <SimpleFooter />
    </div>
  );
};

export default Features;