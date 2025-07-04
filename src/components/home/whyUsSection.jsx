"use client"

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Heart, ShieldCheck, Stethoscope } from 'lucide-react'; // Lucide icons for the advantages section
import Image from 'next/image';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const imageRef = useRef(null);
  const statsRefs = useRef([]); // Array to hold refs for each statistic item

  useEffect(() => {
    // Create a GSAP context to manage animations and prevent conflicts
    const ctx = gsap.context(() => {
      // Animation for the main section container: fades in and moves up slightly
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 }, // Start state: invisible, slightly below
        {
          opacity: 1, // End state: fully visible
          y: 0,       // End state: original position
          duration: 1, // Animation duration
          ease: 'power3.out', // Easing function for a smooth finish
          scrollTrigger: {
            trigger: sectionRef.current, // Element that triggers the animation
            start: 'top 80%', // When the top of the section is 80% from the top of the viewport
            toggleActions: 'play none none none', // Play animation once when entering, then do nothing
          },
        }
      );

      // Animation for the left panel (blue box): slides in from the left and fades
      gsap.fromTo(leftPanelRef.current,
        { x: -100, opacity: 0 }, // Start state: off-screen left, invisible
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftPanelRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animation for the right panel (white box): slides in from the right and fades
      gsap.fromTo(rightPanelRef.current,
        { x: 100, opacity: 0 }, // Start state: off-screen right, invisible
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightPanelRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animation for the doctors' image: slides up slightly and fades in
      gsap.fromTo(imageRef.current,
        { y: 50, opacity: 0 }, // Start state: slightly below, invisible
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.3, // Delay to animate after the panels
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%', // Trigger slightly later for the image
            toggleActions: 'play none none none',
          },
        }
      );

      // Animation for each statistic item in the right panel: fades in and moves up
      statsRefs.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, y: 20 }, // Start state: invisible, slightly below
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.1, // Stagger animation for each item
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%', // Trigger when the item is 90% from the top of the viewport
              toggleActions: 'play none none none',
            },
          }
        );
      });

    }, sectionRef); // Scope the GSAP context to the main sectionRef

    // Cleanup function: revert all animations when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Data for the statistics section
  const statsData = [
    {
      number: '10+',
      text: 'Years of experience',
      description: 'We have been working since 2012 improving the quality of services every day.',
      icon: <Stethoscope className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      number: '15+',
      text: 'Areas of medicine',
      description: 'From family medicine to cardiology and laboratory diagnostics.',
      icon: <CheckCircle className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      number: '95%',
      text: 'Satisfied patients',
      description: 'According to internal surveys over the past year.',
      icon: <Heart className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      number: '98%',
      text: 'Diagnostic accuracy',
      description: 'Thanks to modern equipment and experienced specialists.',
      icon: <ShieldCheck className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 md:p-8 font-inter bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Optional: Background pattern for visual flair, similar to the image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" stroke="none" />
        </svg>
      </div>

      {/* Main content container with shadow and rounded corners */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden bg-white">
        {/* Left Panel - Blue Section */}
        <div
          ref={leftPanelRef}
          className="relative flex flex-col items-center justify-start p-6 md:p-10 lg:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none min-h-[400px] lg:min-h-[600px] overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left w-full">
            Why choose us ?
          </h2>
    

          {/* Doctors' Image: positioned to overlap both sections */}
          <Image
            ref={imageRef}
            src="/images/doctors.png" // Using the provided image filename
            alt="Experienced Doctors"
            width={0}
            height={0}
            sizes='100vw'
            // Responsive positioning for the image
            className="absolute bottom-0 left-1/2 -translate-x-1/2  lg:right-0 lg:translate-x-0
                       w-[90%] md:w-[70%] lg:w-[120%] h-auto object-cover rounded-b-3xl lg:rounded-none"
            style={{ transform: 'translateX(-50%)', maxWidth: '400px', zIndex: 2 }} // Ensure image is above blue box
            onError={(e) => { e.target.src = "https://placehold.co/600x400/007BFF/FFFFFF?text=Doctors"; }} // Fallback
          />

          {/* Text overlays on the image (simplified, without connecting lines) */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:bottom-40 lg:left-1/4 text-white text-sm md:text-base font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm z-30">
            Experienced Doctors
          </div>
          <div className="absolute bottom-5 left-1/4 text-white text-sm md:text-base font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm z-30">
            Modern Equipment
          </div>
          <div className="absolute bottom-30 right-1/4 text-white text-sm md:text-base font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm z-30">
            Certified Clinic
          </div>

          
        </div>

        {/* Right Panel - White Section (Advantages) */}
        <div
          ref={rightPanelRef}
          className="flex flex-col p-6 md:p-10 lg:w-3/5 bg-white text-gray-800 rounded-b-3xl lg:rounded-r-3xl lg:rounded-tl-none"
        >
          <p className="text-sm md:text-base text-blue-600 font-semibold mb-2">
            ( We are experts )
          </p>


          {/* Grid for the statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 flex-grow">
            {statsData.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRefs.current[index] = el)} // Assign ref for GSAP animation
                className="flex flex-col items-start"
              >
                <div className="flex items-center mb-2">
                  {stat.icon} {/* Lucide icon */}
                  <p className="text-4xl md:text-5xl font-extrabold text-blue-600 ml-3">
                    {stat.number}
                  </p>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {stat.text}
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
