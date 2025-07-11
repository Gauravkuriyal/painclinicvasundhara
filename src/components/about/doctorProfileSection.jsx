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
import { BookOpen, GraduationCap, Briefcase, Award, FileText } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DoctorProfileSection = () => {
  const sectionRef = useRef(null);
  const profileCardRef = useRef(null);
  const contentRefs = useRef([]); // To animate individual content blocks

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

      // Animation for the doctor's profile card
      gsap.fromTo(profileCardRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: profileCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Staggered animation for content blocks (education, experience, etc.)
      contentRefs.current.forEach((block, index) => {
        gsap.fromTo(block,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.15, // Stagger animation
            scrollTrigger: {
              trigger: block,
              start: 'top 90%',
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
            Our Founder & Clinic
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Meet Dr. Sachin Mittal & <span className="text-blue-700">Our Mission</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Dedicated to providing advanced, compassionate pain care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column: Doctor Profile Card */}
          <Card ref={profileCardRef} className="w-full lg:w-1/3 rounded-2xl shadow-xl p-6 bg-white flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-200 shadow-md">
              <Image
                src="/images/doctor.png" // Using the provided image filename
                alt="Dr. Sachin Mittal"
                layout="fill"
                objectFit="cover"
                quality={90}
                onError={(e) => { e.target.src = "/imahes"; }} // Fallback
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Dr. Sachin Mittal</CardTitle>
            <CardDescription className="text-blue-600 text-lg font-medium mb-4">Pain Management Specialist</CardDescription>
            <p className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Experience:</span> 10 Years
            </p>
            <p className="text-gray-700 text-sm mb-6">
              <span className="font-semibold">Location:</span> Vasundhara, Ghaziabad
            </p>
            {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 shadow-md transition-all duration-200 flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" /> Book Appointment
            </Button>
            <Button variant="outline" className="w-full mt-3 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg py-2 px-4 transition-all duration-200">
              Leave a Review
            </Button> */}
          </Card>

          {/* Right Column: Detailed Information */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* About Dr. Sachin Mittal */}
            <Card ref={el => contentRefs.current[0] = el} className="rounded-2xl shadow-xl p-6 bg-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" /> About Dr. Sachin Mittal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-700 text-base leading-relaxed space-y-3">
                <p>
                  Dr. Sachin Mittal is a highly experienced Pain Management Specialist with 10 years of expertise in the field. He practices at Advance Pain Care Clinic in Vasundhara, Ghaziabad.
                </p>
                <p>
                  He completed his MBBS from Baroda Medical College in 2005, Postgraduation in Anesthesia from B J Medical College, Ahmedabad in 2008, and a Fellowship in Pain Medicine from Medvarsity in 2015. He also completed his Dip. Anesthesiology from Gujarat Cancer Research Institute, Ahmedabad.
                </p>
                <p>
                  Dr. Mittal received training in pain care under national and international eminent stalwarts, starting his journey at GCRI and continuing at GB Pant Hospital, Delhi, before completing his fellowship at Apollo Hospital, Medvarsity, Hyderabad.
                </p>
              </CardContent>
            </Card>

            {/* Specialization and Expertise */}
            <Card ref={el => contentRefs.current[1] = el} className="rounded-2xl shadow-xl p-6 bg-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" /> Specialization & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-700 text-base leading-relaxed space-y-3">
                <p>
                  He specializes in Pain Management and has mastered various routine & advanced pain management interventional techniques over the past decade.
                </p>
                <p>
                  His special interest lies in managing knee pain & back pain with advanced non-surgical methods. He is actively involved in dedicated work in Regenerative methods to treat pain and is continuously engaged in the study and research of pain management.
                </p>
                <p>
                  Dr. Mittal is a young, dynamic & trusted pain physician, and a proud member of the Indian Society of Anaesthesiologists (ISA), ISSP, and Indian Ozone Forum, including the Indian chapter of the International Association for the Study of Pain (ISSP).
                </p>
              </CardContent>
            </Card>

            {/* About Advance Pain Care Clinic */}
            <Card ref={el => contentRefs.current[2] = el} className="rounded-2xl shadow-xl p-6 bg-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3" /> About Advance Pain Care Clinic
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-700 text-base leading-relaxed">
                <p>
                  Advance Pain Care Clinic is an initiative born out of a profound interest in serving patients suffering from pain. We are committed to offering the highest quality of care, utilizing the most advanced technology available, all while maintaining a deeply patient-focused approach. Our goal is to provide effective solutions that help you lead a pain-free life.
                </p>
              </CardContent>
            </Card>

            {/* Optional: Documents section as seen in the reference image */}
            {/* <Card ref={el => contentRefs.current[3] = el} className="rounded-2xl shadow-xl p-6 bg-white">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" /> Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Award className="w-5 h-5 text-blue-500" />
                  <a href="#" className="text-blue-600 hover:underline text-sm md:text-base">Specialist Certificate (Anesthesia)</a>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <a href="#" className="text-blue-600 hover:underline text-sm md:text-base">Fellowship in Pain Medicine</a>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <a href="#" className="text-blue-600 hover:underline text-sm md:text-base">Membership: ISSP, ISA</a>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;