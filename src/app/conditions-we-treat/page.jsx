import ServicesHeroSection from "@/components/services/servicesHeroSection";
import ServicesListSection from "@/components/services/servicesListSectionConditionWeTreat";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";

export default function ConditionsWeTreatPage(){

    return <>
    <Header />
    <ServicesHeroSection service={"Conditions We Treat"} />
    <ServicesListSection />
    <Footer />
    </>
}