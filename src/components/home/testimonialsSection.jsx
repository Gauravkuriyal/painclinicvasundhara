"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using actual Next.js Image component
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Shadcn Card components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Shadcn Avatar component
import { Star } from 'lucide-react'; // Lucide icon for star ratings

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null); // Ref for the overall section for scroll animation
  const testimonialRefs = useRef([]); // Array to hold refs for each testimonial card

  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      title: "Chronic Back Pain Patient",
      avatar: "https://placehold.co/100x100/E0F2FE/000000?text=SM",
      rating: 5,
      quote: "After years of suffering from chronic back pain, Advance Pain Care Clinic provided me with a personalized treatment plan that truly changed my life. I can finally enjoy activities with my family again!",
    },
    {
      id: 2,
      name: "John D.",
      title: "Sciatica Patient",
      avatar: "https://placehold.co/100x100/D1E7DD/000000?text=JD",
      rating: 5,
      quote: "The team at Advance Pain Care Clinic is exceptional. Their expertise in sciatica treatment brought me immense relief. Highly recommend their compassionate and effective care.",
    },
    {
      id: 3,
      name: "Emily R.",
      title: "Migraine Sufferer",
      avatar: "https://placehold.co/100x100/FEEBCB/000000?text=ER",
      rating: 4,
      quote: "I've struggled with migraines for decades. The innovative therapies here have significantly reduced their frequency and intensity. A truly supportive environment.",
    },
    {
      id: 4,
      name: "Michael B.",
      title: "Sports Injury Recovery",
      avatar: "https://placehold.co/100x100/FEE2E2/000000?text=MB",
      rating: 5,
      quote: "Recovering from a sports injury was tough, but the physical rehabilitation program was outstanding. They helped me regain strength and get back to my active lifestyle.",
    },
    {
      id: 5,
      name: "Jessica L.",
      title: "Arthritis Patient",
      avatar: "https://placehold.co/100x100/E6E6FA/000000?text=JL",
      rating: 5,
      quote: "Joint injections here are precise and effective. The doctors are incredibly knowledgeable and take the time to explain everything. Feeling much better!",
    },
    {
      id: 6,
      name: "David K.",
      title: "Neuropathy Patient",
      avatar: "https://placehold.co/100x100/D4EDDA/000000?text=DK",
      rating: 4,
      quote: "Living with neuropathy was challenging, but the specialized treatment I received here has made a significant difference in managing my symptoms. Grateful for their care.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main section container (fade in on scroll)
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

      // Staggered animation for each testimonial card
      testimonialRefs.current.forEach((card, index) => {
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

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
            What Our Patients Say
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Hear From Our <span className="text-blue-700">Happy Patients</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Discover why patients trust Advance Pain Care Clinic for their pain management needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)} // Assign ref for GSAP animation
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <CardContent className="p-0">
                {renderStars(testimonial.rating)}
                <p className="text-gray-700 text-base md:text-lg italic mt-4 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <Avatar className="h-12 w-12 mr-4 shadow-md">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
