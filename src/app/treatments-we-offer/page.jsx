import ServicesHeroSection from "@/components/services/servicesHeroSection";
import ServicesListSection from "@/components/services/servicesListSectionTreatmentWeOffer";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";

export default function TreatmentsWeOfferPage(){

    return <>
    <Header />
    <ServicesHeroSection service={"Treatments we Offer"} />
    <ServicesListSection />
    <Footer />
    </>
}