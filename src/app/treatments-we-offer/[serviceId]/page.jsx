import ServiceDetailHeroSection from "@/components/services/serviceDetailHeroSectionTreatmentWeOffer";
import ServiceDetailSection from "@/components/services/serviceDetailTreatmentWeOffer";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";


const serviceData = {
    name: "ORSERDU (elacestrant)",
    type: "Tablet",
    tabs: [
      {
        id: "description",
        title: "Description",
        contentHtml: `
          <p class="mb-4">ORSERDU (elacestrant) 345 mg film-coated tablet contains 400 mg of elacestrant dihydrochloride (approximately 345 mg of elacestrant free base). ORSERDU (elacestrant) 86 mg film-coated tablet contains 100 mg of elacestrant dihydrochloride (approximately 86 mg of elacestrant free base).</p>
          <p class="mb-4">Both tablet strengths contain the following inactive ingredients: colloidal silicon dioxide, crospovidone, magnesium stearate (non-bovine), microcrystalline cellulose, and silicified microcrystalline cellulose. The tablets also contain Opadry II Blue (polyvinyl alcohol, titanium dioxide, polyethylene glycol, FD&C Blue #1 and talc).</p>
          <p>Elacestrant is an oral selective estrogen receptor degrader (SERD) indicated for the treatment of postmenopausal women or adult men with ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer with disease progression following at least one line of endocrine therapy.</p>
        `,
      },
      {
        id: "composition",
        title: "Composition",
        contentHtml: `
          <h4 class="text-lg font-semibold mb-2">Active Ingredient:</h4>
          <ul class="list-disc list-inside mb-4">
            <li>Elacestrant dihydrochloride</li>
          </ul>
          <h4 class="text-lg font-semibold mb-2">Inactive Ingredients:</h4>
          <ul class="list-disc list-inside space-y-1">
            <li>Colloidal silicon dioxide</li>
            <li>Crospovidone</li>
            <li>Magnesium stearate (non-bovine)</li>
            <li>Microcrystalline cellulose</li>
            <li>Silicified microcrystalline cellulose</li>
            <li>Opadry II Blue (polyvinyl alcohol, titanium dioxide, polyethylene glycol, FD&C Blue #1, talc)</li>
          </ul>
          <p class="mt-4">The precise formulation ensures stability and bioavailability for optimal therapeutic effect.</p>
        `,
      },
      {
        id: "dosage",
        title: "Dosage",
        contentHtml: `
          <p class="mb-4">The recommended dosage of ORSERDU is 345 mg taken orally once daily with food. Tablets should be swallowed whole.</p>
          <h4 class="text-lg font-semibold mb-2">Important Considerations:</h4>
          <ul class="list-disc list-inside space-y-1">
            <li>Take at approximately the same time each day.</li>
            <li>Do not chew, crush, or split tablets.</li>
            <li>If a dose is missed, take it as soon as possible on the same day. If more than 12 hours have passed, skip the missed dose and resume the next scheduled dose.</li>
            <li>Dosage adjustments may be necessary based on individual patient response and tolerability, particularly for patients with hepatic impairment.</li>
          </ul>
          <p class="mt-4">Always consult with a healthcare professional for personalized dosage instructions and treatment plans.</p>
        `,
      },
      {
        id: "indications",
        title: "Indications",
        contentHtml: `
          <p class="mb-4">ORSERDU (elacestrant) is indicated for the treatment of:</p>
          <ul class="list-disc list-inside space-y-1">
            <li>Postmenopausal women or adult men with ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer.</li>
            <li>Patients who have experienced disease progression following at least one line of endocrine therapy.</li>
          </ul>
          <p class="mt-4">This medication is a targeted therapy designed to specifically address cancers with the ESR1 mutation, offering a new treatment option for eligible patients.</p>
        `,
      },
    ],
  };

export default async function ServicePageTreatmentWeOffer({params}){
    const {serviceId} = await params;
    console.log(serviceId)
    return <>
    <Header />
    <ServiceDetailHeroSection title={serviceId} />
    <ServiceDetailSection serviceData={serviceData} />
    <Footer />
    </>
}