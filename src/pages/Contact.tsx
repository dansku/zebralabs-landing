import NavHeader from "@/components/NavHeader";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavHeader />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;