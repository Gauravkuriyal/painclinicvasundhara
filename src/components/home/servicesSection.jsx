"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Dummy data for services
  const services = [
    {
      id: 1,
      image: "/images/serviceImage.png",
      title: "Chronic Pain Management",
      description: "Comprehensive strategies for long-term relief from persistent pain conditions.",
      link: "/services/chronic-pain",
    },
    {
      id: 2,
      image: "/images/serviceImage.png",
      title: "Spine & Back Care",
      description: "Specialized treatments for back pain, sciatica, and spinal disorders.",
      link: "/services/spine-care",
    },
    {
      id: 3,
      image: "/images/serviceImage.png",
      title: "Joint Injections & Therapies",
      description: "Targeted injections and therapies for arthritis and joint-related pain.",
      link: "/services/joint-injections",
    },
    {
      id: 4,
      image: "/images/serviceImage.png",
      title: "Neuropathic Pain Treatment",
      description: "Advanced solutions for nerve pain, including neuropathy and neuralgia.",
      link: "/services/neuropathic-pain",
    },
    {
      id: 5,
      image: "/images/serviceImage.png",
      title: "Physical Rehabilitation",
      description: "Rehabilitation programs to restore function and improve mobility.",
      link: "/services/rehabilitation",
    },
    {
      id: 6,
      image: "/images/serviceImage.png",
      title: "Headache & Migraine Relief",
      description: "Effective treatments for chronic headaches and debilitating migraines.",
      link: "/services/headache-migraine",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main section container (fade in on scroll)
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-inter overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive <span className="text-blue-700">Pain Care Services</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            At Advance Pain Care Clinic, we offer a wide range of specialized
            services designed to diagnose, treat, and manage various pain
            conditions.
          </p>
        </div>

        {/* Shadcn Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={service.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 min-h-0 flex-shrink-0"
              >
                <div className="p-1">
                  <Card className="rounded-2xl h-[400px] w-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative w-full h-1/2 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={200}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {service.description}
                          </p>
                        </div>
                        <Button
                          asChild
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 shadow-md transition-all duration-200"
                        >
                          <a href={service.link} title={`Learn more about ${service.title}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;