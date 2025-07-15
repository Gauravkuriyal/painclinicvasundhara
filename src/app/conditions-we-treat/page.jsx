import ServicesHeroSection from "@/components/services/ServicesHeroSection";
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