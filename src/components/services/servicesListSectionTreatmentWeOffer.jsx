"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Shadcn Card components
import { Button } from '@/components/ui/button'; // Shadcn Button component
import { ArrowRight, Stethoscope, HeartPulse, Brain, Bone, ShieldCheck, Footprints } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesListSection = () => {
  const sectionRef = useRef(null);
  const serviceCardRefs = useRef([]); // Array to hold refs for each service card

  // Dummy data for services
  const services = [
    {
      id: 1,
      image: "/images/serviceImage.png",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      title: "Chronic Pain Management",
      description: "Comprehensive strategies for long-term relief from persistent pain conditions like fibromyalgia, neuropathic pain, and complex regional pain syndrome.",
      link: "/treatments-we-offer/chronic-pain"
    },
    {
      id: 2,
      image: "/images/serviceImage.png",
      icon: <Bone className="w-6 h-6 text-blue-600" />,
      title: "Spine & Back Care",
      description: "Specialized treatments for various back pain issues, including sciatica, herniated discs, spinal stenosis, and degenerative disc disease.",
      link: "/treatments-we-offer/spine-care"
    },
    {
      id: 3,
      image: "/images/serviceImage.png",
      icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
      title: "Joint & Musculoskeletal Therapies",
      description: "Targeted injections and advanced therapies for arthritis, knee pain, shoulder pain, hip pain, and other joint-related discomforts.",
      link: "/treatments-we-offer/joint-therapies"
    },
    {
      id: 4,
      image: "/images/serviceImage.png",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Neuropathic Pain Treatment",
      description: "Advanced solutions for nerve pain conditions such as diabetic neuropathy, post-herpetic neuralgia, and trigeminal neuralgia.",
      link: "/treatments-we-offer/neuropathic-pain"
    },
    {
      id: 5,
      image: "/images/serviceImage.png",
      icon: <Footprints className="w-6 h-6 text-blue-600" />,
      title: "Physical Rehabilitation Support",
      description: "Collaborative rehabilitation programs designed to restore function, improve mobility, and enhance overall physical well-being post-treatment.",
      link: "/treatments-we-offer/rehabilitation"
    },
    {
      id: 6,
      image: "/images/serviceImage.png",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Headache & Migraine Relief",
      description: "Effective diagnostic and treatment approaches for chronic headaches and debilitating migraines, providing lasting relief.",
      link: "/treatments-we-offer/headache-migraine"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the entire section to fade in
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Staggered animation for each service card
      serviceCardRefs.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)', // A slightly bouncy ease for a creative feel
            delay: index * 0.1, // Stagger the animation
            scrollTrigger: {
              trigger: card,
              start: 'top 90%', // Trigger when the card is 90% from the top of the viewport
              toggleActions: 'play none none none',
            },
          }
        );
      });

    }, sectionRef); // Scope GSAP context to the section

    return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Our Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Explore Our <span className="text-blue-700">Specialized Services</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            At Advance Pain Care Clinic, we provide a comprehensive range of treatments and therapies to address your pain needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              ref={(el) => (serviceCardRefs.current[index] = el)} // Assign ref for GSAP animation
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  className="transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-0 flex-grow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">
                    {service.icon} {/* Lucide icon */}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <Button
                  asChild // Renders as a child element, allowing it to be a link
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 shadow-md transition-all duration-200"
                >
                  {/* In a real Next.js app, use <Link href={service.link}> for client-side navigation */}
                  <a href={service.link} className="flex items-center justify-center">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
