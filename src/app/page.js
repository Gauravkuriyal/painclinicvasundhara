import ContactSection from "@/components/home/contactSection";
import HeroSection from "@/components/home/heroSection";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <ContactSection />
    <Footer />
    </>
  );
}
