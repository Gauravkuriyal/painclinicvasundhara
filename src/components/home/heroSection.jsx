"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import AppointmentFormModal from "../utility/appointmentFormModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Carousel slides data
  const slides = [
    {
      image: "/images/hero1.png",
      alt: "Pain Care Treatment",
    },
    {
      image: "/images/hero2.png",
      alt: "Holistic Pain Management",
    },
    {
      image: "/images/hero3.png",
      alt: "Innovative Therapies",
    },
  ];

  // Animation for CTA card on load
//   useEffect(() => {
//     const ctaCard = document.querySelector(".cta-card");
//     if (ctaCard) {
//       ctaCard.classList.add("translate-y-0", "opacity-100");
//     }
//   }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true, // Enables infinite scroll
        }}
        plugins={[
          Autoplay({
            delay: 3000, // Auto-rotate every 3 seconds
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative p-0">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain md:object-cover w-full h-full"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel Navigation */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none w-12 h-12 rounded-full transition-all duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none w-12 h-12 rounded-full transition-all duration-300" />
      </Carousel>

      {/* CTA Card Overlay */}
      <div className="absolute bottom-8 left-4 right-4 md:left-auto md:right-8 md:bottom-16 max-w-sm">
        <Card className="cta-card bg-black/20 backdrop-blur-md border border-white/20 text-white p-0 transform translate-y-16  transition-all duration-700 ease-out">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Healing?</h3>
            <p className="text-sm text-gray-200 mb-6">
              Schedule a consultation with our pain care experts today and take the first step toward relief.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
            >
              Book Appointment
            </Button>
            <AppointmentFormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          </CardContent>
        </Card>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}