import AboutUsHeroSection from "@/components/about/aboutUsHeroSection";
import DoctorProfileSection from "@/components/about/doctorProfileSection";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";
import PageIntro from "@/components/utility/pageIntro";

export default function AboutPage(){

    return <>
    <Header />
    <AboutUsHeroSection />
    <DoctorProfileSection />
    <Footer />
    </>
}