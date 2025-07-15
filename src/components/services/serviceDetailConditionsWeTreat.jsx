"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Plugin for smooth scrolling
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ServiceDetailSection = ({serviceData}) => {
    const sectionRef = useRef(null);
    const contentRefs = useRef({}); // To store refs for each content section for scrolling
    const accordionContentRefs = useRef({}); // To store refs for accordion content for height animation

    // State to manage which accordion section is open
    //   const [openSection, setOpenSection] = useState("what-is-interferential-therapy");
    const [openSections, setOpenSections] = useState(() =>
        serviceData.sections.map((s) => s.id)
    );
    // State to manage which section is currently in view for navigation highlighting
    const [activeNavSection, setActiveNavSection] = useState(serviceData.sections[0].id);


    // Function to toggle accordion sections
    // const toggleSection = (sectionId) => {
    //     setOpenSection(prevOpenSection =>
    //         prevOpenSection === sectionId ? null : sectionId
    //     );
    // };
    const toggleSection = (sectionId) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

    // Function to scroll to a specific section
    const scrollToSection = (sectionId) => {
    const targetElement = contentRefs.current[sectionId];
    if (targetElement) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetElement,
          offsetY: 100
        },
        ease: "power2.inOut"
      });
    }
  };

    // Dummy data for the service page
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main section fade-in animation
            //   gsap.fromTo(sectionRef.current,
            //     { opacity: 0, y: 50 },
            //     {
            //       opacity: 1,
            //       y: 0,
            //       duration: 1,
            //       ease: 'power3.out',
            //       scrollTrigger: {
            //         trigger: sectionRef.current,
            //         start: 'top 80%',
            //         toggleActions: 'play none none none',
            //       },
            //     }
            //   );

            // Animate accordion content height
            //   Object.keys(accordionContentRefs.current).forEach(id => {
            //     const contentElement = accordionContentRefs.current[id];
            //     if (contentElement) {
            //       gsap.to(contentElement, {
            //         height: openSection === id ? "auto" : 0,
            //         opacity: openSection === id ? 1 : 0,
            //         paddingTop: openSection === id ? "1.5rem" : 0, // p-6
            //         paddingBottom: openSection === id ? "1.5rem" : 0, // p-6
            //         duration: 0.5,
            //         ease: "power2.inOut",
            //         overflow: "hidden",
            //         onComplete: () => {
            //           if (openSection !== id) {
            //             contentElement.style.display = 'none'; // Hide completely when closed
            //           }
            //         },
            //         onStart: () => {
            //           if (openSection === id) {
            //             contentElement.style.display = 'block'; // Show when opening
            //           }
            //         }
            //       });
            //     }
            //   });

            // Highlight active section in sticky nav
            serviceData.sections.forEach(section => {
                ScrollTrigger.create({
                    trigger: contentRefs.current[section.id],
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveNavSection(section.id), // Update active nav section
                    onEnterBack: () => setActiveNavSection(section.id), // Update active nav section
                    // Removed onLeave and onLeaveBack to prevent un-highlighting too quickly
                });
            });

        }, []); // Scope GSAP context to the section

        return () => ctx.revert(); // Clean up GSAP animations
    }, []); // Re-run when openSection changes or serviceData sections change

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 font-inter">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Service Title and Introduction */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        {serviceData.title}
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        {serviceData.introduction}
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Sticky Navigation / Table of Contents */}
                    <div className="lg:w-1/4 sticky top-24 h-fit hidden lg:block"> {/* Adjust top-X based on your header height */}
                        <Card className="rounded-xl shadow-lg p-6 bg-white">
                            <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                                On This Page
                            </CardTitle>
                            <nav>
                                <ul className="space-y-3">
                                    {serviceData.sections.map((section) => (
                                        <li key={section.id}>
                                            <button
                                                onClick={() => scrollToSection(section.id)}
                                                className={`flex items-center w-full text-left text-base transition-colors duration-200 ${activeNavSection === section.id // Use activeNavSection for highlighting
                                                        ? 'text-blue-700 font-semibold'
                                                        : 'text-gray-700 hover:text-blue-600'
                                                    }`}
                                            >
                                                <ChevronRight className={`w-4 h-4 mr-2 ${activeNavSection === section.id ? 'text-blue-700' : 'text-gray-500'}`} />
                                                {section.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </Card>
                    </div>

                    {/* Right Column: Service Details Content */}
                    <div className="lg:w-3/4 space-y-8">
                        {/* <div className='w-full relative h-[350px] rounded-xl shadow-lg bg-white overflow-hidden'> */}
                            <Image src={serviceData.bannerImage} alt={serviceData.title} width={0} height={0} sizes='100vw' className='w-full rounded-xl shadow-lg bg-white' />
                        {/* </div> */}
                        {serviceData.sections.map((section, index) => (
                            <Card
                                key={section.id}
                                ref={el => contentRefs.current[section.id] = el} // Ref for scrolling to
                                className="rounded-xl p-0 shadow-lg bg-white gap-0"
                            >
                                <CardHeader
                                    className="p-2 cursor-pointer flex flex-row items-center justify-between"
                                    onClick={() => toggleSection(section.id)}
                                >
                                    <CardTitle className="text-xl p-3 font-bold text-gray-900">
                                        {section.title}
                                    </CardTitle>
                                    {openSections.includes(section.id) ? (
                                        <ChevronDown className="w-6 h-6 text-blue-600 transition-transform duration-300 transform rotate-180" />
                                    ) : (
                                        <ChevronRight className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                                    )}
                                </CardHeader>
                                <div
                                    ref={el => accordionContentRefs.current[section.id] = el} // Ref for height animation
                                    style={{
                                        height: openSections.includes(section.id) ? 'auto' : 0,
                                        opacity: openSections.includes(section.id) ? 1 : 0,
                                        paddingTop: openSections.includes(section.id) ? '1.5rem' : 0, // p-6
                                        paddingBottom: openSections.includes(section.id) ? '1.5rem' : 0, // p-6
                                        overflow: 'hidden',
                                        display: openSections.includes(section.id) ? 'block' : 'none' // Control display for initial state
                                    }}
                                    className="p-6 pt-0 prose prose-lg max-w-none text-gray-800 leading-relaxed [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_strong]:font-semibold [&_a]:text-blue-600 [&_a:hover]:underline [&_ul]:list-disc [&_ol]:list-decimal [&_li]:mb-1 [&_p]:mb-4"
                                    dangerouslySetInnerHTML={{ __html: section.contentHtml }}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailSection;


