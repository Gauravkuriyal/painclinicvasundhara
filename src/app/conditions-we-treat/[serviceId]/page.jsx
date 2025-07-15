import ServiceDetailSection from "@/components/services/serviceDetailConditionsWeTreat";
import ServiceDetailHeroSection from "@/components/services/serviceDetailHeroSectionConditionWeTreat";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";


const serviceData = {
        title: "Interferential Therapy (IFT)",
        bannerImage: "/images/serviceImage.png",
        introduction: `Interferential Therapy (IFT) is a popular and effective electrotherapy treatment used in modern physiotherapy for pain management and tissue healing. It involves the use of medium-frequency currents to stimulate nerves and muscles, promoting natural pain relief mechanisms and improving circulation.`,
        sections: [
            {
                id: "what-is-interferential-therapy",
                title: "What is Interferential Therapy (IFT)?",
                contentHtml: `
          <p class="mb-4">IFT stands for Interferential Therapy and is one of the types of electrotherapy used for the management of pain. The principle of interferential therapy is to cause two medium-frequency currents of slightly different frequencies to interfere with one another. For example, if circuit A carries a current with a frequency of 4000 Hz and circuit B carries a current with a frequency of 4100 Hz, the resultant (or beat) frequency would be 100 Hz. This "interference" frequency is what is delivered to the patient's tissues.</p>
          <p class="mb-4">The medium-frequency currents are able to penetrate deeper into the tissues with less discomfort compared to low-frequency currents, making IFT a comfortable yet powerful treatment option. It's widely used in clinics for various musculoskeletal and neurological conditions.</p>
          <ul class="list-disc list-inside space-y-2">
            <li>Non-invasive and drug-free pain relief.</li>
            <li>Targets deep tissues effectively.</li>
            <li>Promotes natural healing processes.</li>
          </ul>
        `
            },
            {
                id: "how-does-ift-work",
                title: "How Does IFT Work?",
                contentHtml: `
          <p class="mb-4">Interferential therapy works by delivering electrical impulses through electrodes placed on the skin. Two separate medium-frequency currents are applied, which cross paths (interfere) within the target tissue. This interference creates a new, lower "beat" frequency within the body.</p>
          <p class="mb-4">This beat frequency mimics the body's natural nerve impulses, stimulating nerve fibers to block pain signals (Gate Control Theory of Pain) and release endorphins, which are natural painkillers. Additionally, it helps to:</p>
          <ul class="list-disc list-inside space-y-2">
            <li>Increase blood flow to the affected area, aiding in the removal of waste products and delivery of nutrients.</li>
            <li>Reduce swelling and inflammation.</li>
            <li>Promote muscle contraction and relaxation, which can help in muscle re-education and spasm reduction.</li>
          </ul>
          <p>The precise placement of electrodes and adjustment of frequencies allow for targeted treatment of specific pain areas and conditions.</p>
        `
            },
            {
                id: "benefits-of-ift",
                title: "Key Benefits of IFT",
                contentHtml: `
          <p class="mb-4">Interferential Therapy offers a range of therapeutic benefits, making it a versatile tool in pain management and rehabilitation:</p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Pain Relief:</strong> Effectively reduces acute and chronic pain by stimulating nerve fibers and releasing endorphins.</li>
            <li><strong>Reduced Swelling & Inflammation:</strong> Helps to decrease fluid retention and inflammatory responses in injured tissues.</li>
            <li><strong>Improved Blood Circulation:</strong> Enhances blood flow, which accelerates healing and tissue repair.</li>
            <li><strong>Muscle Stimulation:</strong> Can be used to reduce muscle spasms, prevent muscle atrophy, and facilitate muscle re-education.</li>
            <li><strong>Non-Invasive & Drug-Free:</strong> A safe alternative or adjunct to medication, with minimal side effects.</li>
            <li><strong>Deep Tissue Penetration:</strong> Medium frequencies allow deeper penetration compared to other electrotherapy modalities.</li>
          </ul>
          <p>Patients often report a comfortable tingling sensation during treatment, followed by significant pain reduction.</p>
        `
            },
            {
                id: "conditions-treated-by-ift",
                title: "Conditions Treated by IFT",
                contentHtml: `
          <p class="mb-4">IFT is a versatile treatment used for a wide array of conditions, particularly those involving pain and inflammation:</p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Back and Neck Pain:</strong> Including disc-related pain, sciatica, and muscle spasms.</li>
            <li><strong>Arthritis:</strong> Osteoarthritis and rheumatoid arthritis pain in various joints.</li>
            <li><strong>Joint Pain:</strong> Knee, shoulder, hip, elbow, and ankle pain.</li>
            <li><strong>Sports Injuries:</strong> Sprains, strains, tendonitis, and bruising.</li>
            <li><strong>Neuropathic Pain:</strong> Such as peripheral neuropathy and neuralgia.</li>
            <li><strong>Fibromyalgia:</strong> To help manage widespread chronic pain.</li>
            <li><strong>Post-Surgical Pain:</strong> To aid in recovery and reduce discomfort.</li>
            <li><strong>Edema (Swelling) Reduction:</strong> Following injury or surgery.</li>
          </ul>
          <p>A thorough assessment by our specialists will determine if IFT is the right treatment for your specific condition.</p>
        `
            },
            {
                id: "what-to-expect-during-ift",
                title: "What to Expect During an IFT Session",
                contentHtml: `
          <p class="mb-4">An IFT session is typically comfortable and straightforward:</p>
          <ol class="list-decimal list-inside space-y-2">
            <li><strong>Consultation:</strong> Your therapist will first assess your condition and discuss your symptoms.</li>
            <li><strong>Preparation:</strong> You'll be asked to expose the area to be treated. The therapist will clean the skin and apply conductive gel.</li>
            <li><strong>Electrode Placement:</strong> Four electrodes are typically placed around the painful area, creating a crisscross pattern for the currents to interfere.</li>
            <li><strong>Treatment:</strong> The machine will be turned on, and the intensity gradually increased until you feel a strong, but comfortable, tingling sensation. It should never be painful.</li>
            <li><strong>Duration:</strong> A typical session lasts between 15-30 minutes, depending on the condition being treated.</li>
            <li><strong>Post-Treatment:</strong> You may feel immediate pain relief, which can last for several hours or days. Multiple sessions are usually recommended for lasting results.</li>
          </ol>
          <p>Our team ensures you are comfortable and informed throughout the entire treatment process.</p>
        `
            },
            {
                id: "is-ift-right-for-you",
                title: "Is IFT Right for You?",
                contentHtml: `
          <p class="mb-4">Interferential Therapy is a safe and effective treatment for many individuals experiencing pain and inflammation. However, like all medical treatments, it's not suitable for everyone.</p>
          <p class="mb-4">It is generally not recommended for individuals with:</p>
          <ul class="list-disc list-inside space-y-2">
            <li>Pacemakers or other implanted electrical devices.</li>
            <li>Pregnancy (especially over the abdominal area).</li>
            <li>Active bleeding or infections.</li>
            <li>Certain skin conditions or open wounds in the treatment area.</li>
          </ul>
          <p>We encourage you to schedule a consultation with our pain management specialists at Advance Pain Care Clinic. They will conduct a thorough evaluation of your condition and medical history to determine if Interferential Therapy, or another suitable treatment, is the best option to help you achieve a pain-free life.</p>        `
            },
        ]
    };

export default async function ServicePageConditionsWeTreat({params}){
    const {serviceId} = await params;
    console.log(serviceId)
    return <>
    <Header />
    <ServiceDetailHeroSection title={serviceId} />
    <ServiceDetailSection serviceData={serviceData} />
    <Footer />
    </>
}