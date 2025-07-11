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
import { Badge } from '@/components/ui/badge'; // Shadcn Badge component for tags/category
import { Calendar, User, Tag, Folder } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BlogDetailSection = ({ blogPost }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const metaRef = useRef(null);
  const summaryRef = useRef(null);

  // Dummy blog post data (replace with actual data passed via props)
  const defaultBlogPost = {
    coverImage: "/images/blog.png",
    title: "Understanding Chronic Pain: A Comprehensive Guide to Relief",
    summary: "Chronic pain affects millions worldwide, significantly impacting quality of life. This comprehensive guide delves into the complexities of chronic pain, exploring its various types, common causes, and the latest advancements in diagnosis and management. We aim to empower you with knowledge and practical strategies to navigate your pain journey effectively.",
    date: "July 11, 2025",
    author: "Dr. Sachin Mittal",
    category: "Pain Management",
    tags: ["Chronic Pain", "Treatment", "Wellness", "Health Tips"],
    // This content would typically come as rich HTML from a CMS/backend
    contentHtml: `
      <p class="mb-6 leading-relaxed text-lg">Chronic pain is more than just a physical sensation; it's a complex condition that can affect every aspect of a person's life, from their physical abilities to their mental well-being. Unlike acute pain, which is a normal sensation that alerts us to injury and usually subsides as the body heals, chronic pain persists for weeks, months, or even years.</p>

      <h2 class="text-3xl font-bold text-gray-900 mb-4">What is Chronic Pain?</h2>
      <p class="mb-6 leading-relaxed">It's generally defined as pain that lasts or recurs for more than three to six months, or beyond the expected period of healing. It can stem from an initial injury, an ongoing illness, or sometimes, it can have no clear cause at all. The impact can be profound, leading to reduced mobility, sleep disturbances, anxiety, depression, and a significant decrease in overall quality of life.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-3">Common Types of Chronic Pain</h3>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong class="text-blue-700">Neuropathic Pain:</strong> Caused by nerve damage, often described as burning, tingling, or shooting pain.</li>
        <li><strong class="text-blue-700">Musculoskeletal Pain:</strong> Affects bones, muscles, ligaments, tendons, and fascia, often seen in back pain, arthritis, and fibromyalgia.</li>
        <li><strong class="text-blue-700">Inflammatory Pain:</strong> Associated with conditions like rheumatoid arthritis, where the body's immune system attacks its own tissues.</li>
        <li><strong class="text-blue-700">Visceral Pain:</strong> Originates from internal organs, often described as a deep ache or pressure.</li>
      </ul>

      <figure class="my-8">
        <Image src="https://placehold.co/800x500/DDEEFF/333333?text=Pain+Management+Therapy" alt="Pain Management Therapy" width={800} height={500} layout="responsive" className="rounded-lg shadow-lg" />
        <figcaption class="text-center text-sm text-gray-500 mt-2 italic">A visual representation of modern pain management therapy.</figcaption>
      </figure>

      <h2 class="text-3xl font-bold text-gray-900 mb-4">Effective Management Strategies</h2>
      <p class="mb-6 leading-relaxed">Managing chronic pain requires a multidisciplinary approach, often involving a combination of medical, physical, and psychological therapies. At Advance Pain Care Clinic, we tailor treatment plans to each individual's unique needs.</p>

      <h3 class="text-2xl font-semibold text-gray-900 mb-3">Our Approach Includes:</h3>
      <ol class="list-decimal list-inside mb-6 space-y-2">
        <li><strong class="text-blue-700">Interventional Procedures:</strong> Nerve blocks, epidural injections, radiofrequency ablation, and spinal cord stimulation.</li>
        <li><strong class="text-blue-700">Physical Therapy:</strong> Exercises to improve strength, flexibility, and range of motion.</li>
        <li><strong class="text-blue-700">Medication Management:</strong> Careful prescription and monitoring of pain medications.</li>
        <li><strong class="text-blue-700">Regenerative Therapies:</strong> Utilizing the body's natural healing processes for long-term relief.</li>
        <li><strong class="text-blue-700">Lifestyle Modifications:</strong> Guidance on diet, exercise, stress reduction, and sleep hygiene.</li>
      </ol>

      <p class="mb-6 leading-relaxed">Living with chronic pain can be challenging, but it doesn't have to define your life. With the right approach and a dedicated team, you can find effective ways to manage your pain and improve your overall well-being. Consult with our specialists at Advance Pain Care Clinic to discuss a personalized treatment plan.</p>
    `,
  };

  // Use the default blogPost if none is provided via props
  const currentBlogPost = blogPost || defaultBlogPost;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main section fade-in
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

      // Staggered animation for content blocks
      gsap.fromTo([summaryRef.current, metaRef.current, contentRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current, // Trigger from the section itself
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentBlogPost]); // Re-run if blog post data changes

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Blog Cover Image */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg mb-10">
          <Image
            src={currentBlogPost.coverImage}
            alt={currentBlogPost.title}
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>

        {/* Blog Post Content Area */}
        <Card className="bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-12">
          <CardHeader className="p-0 mb-6 text-center">
            <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {currentBlogPost.title}
            </CardTitle>
            <CardDescription ref={metaRef} className="flex items-center justify-center space-x-6 text-gray-600 text-sm md:text-base">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                <span>{currentBlogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span>{currentBlogPost.date}</span>
              </div>
            </CardDescription>
          </CardHeader>

          {/* Summary */}
          <div ref={summaryRef} className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg text-gray-800 italic leading-relaxed">
            <p className="font-semibold text-blue-800 mb-2">Summary:</p>
            <p>{currentBlogPost.summary}</p>
          </div>

          {/* Main Blog Content */}
          <div
            ref={contentRef}
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_strong]:font-semibold [&_a]:text-blue-600 [&_a:hover]:underline [&_ul]:list-disc [&_ol]:list-decimal [&_li]:mb-1 [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: currentBlogPost.contentHtml }}
          />

          {/* Tags and Category */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-gray-700">Category:</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer">
              <Folder className="w-4 h-4 mr-1" /> {currentBlogPost.category}
            </Badge>

            <span className="font-semibold text-gray-700 ml-4">Tags:</span>
            {currentBlogPost.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 cursor-pointer">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogDetailSection;
