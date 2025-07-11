"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using actual Next.js Image component
import { Phone, Mail, MapPin } from 'lucide-react'; // Lucide icons for decorative elements
import PageIntro from '../utility/pageIntro';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactUsHeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
//   const textRef = useRef(null);
  const iconRefs = useRef([]); // Ref for animating individual icons
  const blobRefs = useRef([]); // Ref for animating abstract blob shapes

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
      gsap.fromTo([titleRef.current, subtitleRef.current],
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

      // Subtle floating animation for decorative icons
      iconRefs.current.forEach((icon, index) => {
        gsap.to(icon, {
          y: index % 2 === 0 ? 10 : -10, // Alternate direction
          x: index % 3 === 0 ? 10 : -10,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 4 + index * 0.5, // Vary duration
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      // Subtle floating and scaling animation for abstract blobs
      blobRefs.current.forEach((blob, index) => {
        gsap.to(blob, {
          y: index % 2 === 0 ? 20 : -20,
          x: index % 3 === 0 ? 20 : -20,
          scale: 1 + (index * 0.05),
          rotation: index % 2 === 0 ? 15 : -15,
          duration: 8 + index * 1,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

    }, sectionRef); // Scope GSAP context to the section

    return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center text-center overflow-hidden font-inter"
    >
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutUshero.jpg" // Muted blue placeholder image
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="filter brightness-75" // Slightly dim the image for text readability
        />
        {/* Subtle Gradient Overlay for Professionalism */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/70"></div>
      </div>

      {/* Abstract Decorative Blobs (more unique and subtle) */}
      <div
        ref={el => blobRefs.current[0] = el}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
      ></div>
      <div
        ref={el => blobRefs.current[1] = el}
        className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
      ></div>
      <div
        ref={el => blobRefs.current[2] = el}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
      ></div>

      {/* Decorative Elements (Lucide Icons - now with subtle animation and slightly more visible) */}
      <div ref={el => iconRefs.current[0] = el} className="absolute top-[15%] left-[10%] z-0 opacity-10 transform -rotate-12">
        <Phone className="w-24 h-24 text-blue-300" />
      </div>
      <div ref={el => iconRefs.current[1] = el} className="absolute bottom-[20%] right-[10%] z-0 opacity-10 transform rotate-45">
        <Mail className="w-24 h-24 text-blue-300" />
      </div>
      <div ref={el => iconRefs.current[2] = el} className="absolute top-[40%] right-[20%] z-0 opacity-10 transform rotate-90">
        <MapPin className="w-28 h-28 text-blue-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-shadow-sm">
          Get in <span className="text-blue-200">Touch</span>
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl font-medium mb-6 opacity-90 text-shadow-sm">
          We're here to answer your questions and help you start your journey to a pain-free life.
        </p>
        {/* <p ref={textRef} className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
          Whether you have a query about our services, want to book an appointment, or simply need more information,
          our dedicated team at Advance Pain Care Clinic is ready to assist you.
        </p> */}
        <PageIntro className={"text-white font-bold hover:text-blue-200"} crumbs={[
                  {
                    title: "Home",
                    link: "/"
                  }
                ]} title={"Contact"} />
      </div>
    </section>
  );
};

export default ContactUsHeroSection;
