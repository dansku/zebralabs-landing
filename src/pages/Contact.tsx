import NavHeader from "@/components/NavHeader";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black flex flex-col">
      <NavHeader />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;