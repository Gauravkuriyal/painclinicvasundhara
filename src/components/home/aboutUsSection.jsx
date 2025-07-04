"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Users, HeartHandshake, ShieldCheck } from 'lucide-react'; // Lucide icons
import Image from 'next/image';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Simulate Next.js Image component for the immersive environment.
// In a real Next.js project, you would import Image from 'next/image'.
// const NextImage = ({ src, alt, width, height, className, layout = 'responsive', objectFit = 'cover' }) => {
//   // For the immersive preview, we'll use a standard <img> tag with a placeholder.
//   // In a real Next.js app, this would be:
//   // <Image src={src} alt={alt} width={width} height={height} layout={layout} objectFit={objectFit} className={className} />
//   return (
//     <Image
//       src={src || `https://placehold.co/${width || 800}x${height || 600}/A8D9FF/000000?text=About+Us+Image`}
//       alt={alt}
//       className={className}
//       width={width} height={height}
//       style={{ width: '100%', height: 'auto', objectFit: objectFit }}
//       onError={(e) => { e.target.src = `https://placehold.co/${width || 800}x${height || 600}/A8D9FF/000000?text=About+Us+Image`; }}
//     />
//   );
// };

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const pointsRefs = useRef([]); // Array to hold refs for each key point

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main section container
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

      // Animation for the image
      gsap.fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animation for the content block
      gsap.fromTo(contentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2, // Slightly delay content animation
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animation for each key point
      pointsRefs.current.forEach((point, index) => {
        gsap.fromTo(point,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4 + index * 0.1, // Stagger animation
            scrollTrigger: {
              trigger: point,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const keyPoints = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Experienced Specialists',
      description: 'Our team comprises highly skilled and compassionate pain management experts.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: 'Innovative Treatments',
      description: 'Utilizing the latest advancements to provide effective and lasting relief.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is personalized to your unique needs and goals.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Commitment to Excellence',
      description: 'Dedicated to upholding the highest standards of safety and quality in care.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <Image
              src="/images/aboutImage.png" // Placeholder image URL
              alt="About Advance Pain Care Clinic"
              width={800}
              height={600}
              className="rounded-3xl"
            />
            {/* Optional: Overlay text on image for premium feel */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg">
              Your Journey to a Pain-Free Life Starts Here
            </div>
          </div>

          {/* Right Side: Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-blue-700">Advance Pain Care Clinic</span>
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              At Advance Pain Care Clinic, we are dedicated to providing comprehensive and compassionate care for individuals suffering from chronic and acute pain. Our mission is to empower you to regain control of your life by offering personalized treatment plans tailored to your unique needs.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              We believe in a multidisciplinary approach, combining cutting-edge medical procedures with holistic therapies to achieve optimal outcomes. Your well-being is our top priority.
            </p>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  ref={(el) => (pointsRefs.current[index] = el)}
                  className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
