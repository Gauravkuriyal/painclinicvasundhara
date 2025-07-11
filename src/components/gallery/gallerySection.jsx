"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using actual Next.js Image component
import { PictureInPicture, Layers, Grid3X3 } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const columnRefs = useRef([]); // Array to hold refs for each masonry column

  // Dummy image data with varied aspect ratios to better demonstrate masonry
  // In a real application, you'd fetch this or use consistent sizes.
  const images = [
    { src: "/images/gallery.png", alt: "Clinic Interior 1" },
    { src: "/images/gallery.png", alt: "Clinic Interior 1" },
    { src: "/images/aboutUsHero.jpg", alt: "Clinic Interior 1" },
    { src: "/images/aboutImage.png", alt: "Clinic Interior 1" },
    { src: "/images/galleryHero.png", alt: "Clinic Interior 1" },
    { src: "/images/hero1.png", alt: "Clinic Interior 1" },
    { src: "/images/hero2.png", alt: "Clinic Interior 1" },
    { src: "/images/hero3.png", alt: "Clinic Interior 1" },
    { src: "/images/gallery.png", alt: "Clinic Interior 1" },
    { src: "/images/aboutUsHero.jpg", alt: "Clinic Interior 1" },
    { src: "/images/aboutImage.png", alt: "Clinic Interior 1" },
    { src: "/images/galleryHero.png", alt: "Clinic Interior 1" },
    { src: "/images/hero1.png", alt: "Clinic Interior 1" },
    { src: "/images/hero2.png", alt: "Clinic Interior 1" },
    { src: "/images/hero3.png", alt: "Clinic Interior 1" },
    
  ];

  // Divide images into columns for explicit parallax control
  const numColumns = 4; // Max columns for larger screens
  const columns = Array.from({ length: numColumns }, () => []);
  images.forEach((img, i) => {
    columns[i % numColumns].push(img);
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section fade-in
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

      // Parallax effect for each column
      columnRefs.current.forEach((column, index) => {
        if (column) { // Ensure ref is not null
          // Determine parallax direction and intensity for each column
          // Values adjusted to still provide variation without initial offsets
          let yOffset = 0;
          if (index === 0) yOffset = -100; // Moves up
          if (index === 1) yOffset = 100;  // Moves down
          if (index === 2) yOffset = -50; // Moves up moderately
          if (index === 3) yOffset = 50; // Moves down moderately

          gsap.to(column, {
            y: yOffset, // Target Y position
            ease: "none",
            scrollTrigger: {
              trigger: galleryContainerRef.current, // Trigger based on the whole gallery section
              start: "top bottom", // When the top of the gallery hits the bottom of the viewport
              end: "bottom top",   // When the bottom of the gallery hits the top of the viewport
              scrub: true,         // Link animation directly to scroll progress
            },
          });
        }
      });

    }, sectionRef); // Scope GSAP context to the section

    return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Our Visual Story
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Glimpses of <span className="text-blue-700">Advance Pain Care</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Step inside our clinic and see our commitment to a healing environment and advanced care.
          </p>
        </div>

        {/* Masonry Gallery Container */}
        <div ref={galleryContainerRef} className="relative flex flex-wrap md:flex-nowrap gap-4 md:gap-6 lg:gap-8 justify-center items-start pt-16 pb-16">
          {columns.map((colImages, colIndex) => (
            <div
              key={colIndex}
              ref={el => columnRefs.current[colIndex] = el}
              className={`flex flex-col gap-4 md:gap-6 lg:gap-8 w-full ${
                colIndex === 0 ? 'md:w-1/2 lg:w-1/3 xl:w-1/4' : // First col takes full width on small, then responsive
                colIndex === 1 ? 'md:w-1/2 lg:w-1/3 xl:w-1/4' : // Second col takes full width on small, then responsive
                colIndex === 2 ? 'lg:w-1/3 xl:w-1/4' : // Third col only visible on lg+, no initial offset
                'xl:w-1/4' // Fourth col only visible on xl+, no initial offset
              }
              // Hide columns that are not active at specific breakpoints
              ${colIndex >= 2 ? 'hidden lg:flex' : ''}
              ${colIndex >= 3 ? 'hidden xl:flex' : ''}
              `}
            >
              {colImages.map((image, imgIndex) => (
                <div
                  key={`${colIndex}-${imgIndex}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-out"
                >
                  {/* Removed fixed height from parent div to allow Image to control aspect ratio */}
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.src.includes('x') ? parseInt(image.src.split('x')[0].split('/').pop()) : 400} // Extract width from placeholder URL
                      height={image.src.includes('x') ? parseInt(image.src.split('x')[1].split('/')[0]) : 300} // Extract height from placeholder URL
                      layout="responsive"
                      // Removed objectFit="cover" to prevent cropping
                      quality={80}
                      className="w-full h-auto" // Ensure image takes full width and auto height
                    />
                  </div>
                  {/* Optional: Add a subtle overlay on hover or caption */}
                  <div className="p-3 text-sm text-gray-600">
                    {image.alt}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
