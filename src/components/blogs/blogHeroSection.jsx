"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using actual Next.js Image component
import { BookOpen, Feather, Newspaper } from 'lucide-react'; // Lucide icons for decorative elements
import PageIntro from '../utility/pageIntro';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BlogsHeroSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const textRef = useRef(null);
    const iconRefs = useRef([]); // Ref for animating individual icons

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

        }, sectionRef); // Scope GSAP context to the section

        return () => ctx.revert(); // Clean up GSAP animations
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden font-inter"
        >
            {/* Background Image with Subtle Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/blogsHero.jpg" // Muted blue-gray placeholder image
                    alt="Blogs Background"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    className="filter brightness-75" // Slightly dim the image for text readability
                />
                {/* Subtle Gradient Overlay for Professionalism */}
                <div className="absolute inset-0 bg-gradient-to-r  from-white/10 to-black/40"></div> {/* Darker, muted overlay */}
            </div>

            {/* Decorative Elements (Lucide Icons - subtle and relevant) */}
            <div ref={el => iconRefs.current[0] = el} className="absolute top-[15%] left-[10%] z-0 opacity-10 transform -rotate-12">
                <BookOpen className="w-24 h-24 text-gray-300" />
            </div>
            <div ref={el => iconRefs.current[1] = el} className="absolute bottom-[20%] right-[10%] z-0 opacity-10 transform rotate-45">
                <Feather className="w-24 h-24 text-gray-300" />
            </div>
            <div ref={el => iconRefs.current[2] = el} className="absolute top-[40%] right-[20%] z-0 opacity-10 transform rotate-90">
                <Newspaper className="w-28 h-28 text-gray-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
                <h1 ref={titleRef} className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-shadow-sm">
                    Our <span className="text-gray-200">Insights</span>
                </h1>
                <p ref={subtitleRef} className="text-lg md:text-xl font-medium mb-6 opacity-90 text-shadow-sm">
                    Stay informed with the latest in pain management and health.
                </p>
                {/* <p ref={textRef} className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
          Our blog features articles, tips, and expert advice to help you understand pain,
          manage conditions, and improve your overall well-being.
        </p> */}
                <PageIntro className={"text-white font-bold hover:text-blue-200"} crumbs={[
                    {
                        title: "Home",
                        link: "/"
                    }
                ]} title={"Blogs"} />
            </div>
        </section>
    );
};

export default BlogsHeroSection;
