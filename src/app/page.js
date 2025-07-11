import AboutUsSection from "@/components/home/aboutUsSection";
import ContactSection from "@/components/contact/contactSection";
import HeroSection from "@/components/home/heroSection";
import ServicesSection from "@/components/home/servicesSection";
import TestimonialsSection from "@/components/home/testimonialsSection";
import WhyChooseUsSection from "@/components/home/whyUsSection";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutUsSection />
    <ServicesSection />
    <WhyChooseUsSection />
    {/* <ContactSection /> */}
    <TestimonialsSection />
    <Footer />
    </>
  );
}
