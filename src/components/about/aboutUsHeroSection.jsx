"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using actual Next.js Image component
import { Stethoscope, HeartPulse } from 'lucide-react'; // Lucide icons for decorative elements
import PageIntro from '../utility/pageIntro';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUsHeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

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

      // Staggered animation for text elements
      gsap.fromTo([titleRef.current, subtitleRef.current, textRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2, // Stagger the animation of each element
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

    }, sectionRef); // Scope GSAP context to the section

    return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden font-inter"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutUsHero.jpg" // Placeholder image
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="filter brightness-75" // Slightly dim the image for text readability
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-600/60"></div>
      </div>

      {/* Decorative Elements (Subtle Icons) */}
      <div className="absolute top-1/4 left-1/4 z-10 opacity-20 transform -rotate-12">
        <Stethoscope className="w-24 h-24 text-blue-300" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 z-10 opacity-20 transform rotate-45">
        <HeartPulse className="w-24 h-24 text-blue-300" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-white px-4 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          About <span className="text-blue-200">Advance Pain Care Clinic</span>
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-medium mb-6 opacity-90 drop-shadow-md">
          Your Partner in Achieving a Pain-Free and Fulfilling Life.
        </p>
        {/* <p ref={textRef} className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
          At Advance Pain Care Clinic, we are committed to transforming lives by providing exceptional,
          patient-centered pain management solutions. Discover our mission, values, and the dedicated team behind your well-being.
        </p> */}

        <PageIntro className={"text-white font-bold hover:text-blue-200"} crumbs={[
          {
            title: "Home",
            link: "/"
          }
        ]} title={"About"} />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
