import NavHeader from "@/components/NavHeader";
import ContactSection from "@/components/ContactSection";
import SimpleFooter from "@/components/SimpleFooter";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black flex flex-col">
      <NavHeader />
      <ContactSection />
      <SimpleFooter />
    </div>
  );
};

export default Contact;