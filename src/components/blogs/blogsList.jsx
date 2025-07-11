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
import { Calendar, User, ArrowRight } from 'lucide-react'; // Lucide icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {
  const sectionRef = useRef(null);
  const blogCardRefs = useRef([]); // Array to hold refs for each blog card

  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Chronic Pain: A Comprehensive Guide",
      slug: "understanding-chronic-pain",
      image: "/images/blog.png",
      excerpt: "Chronic pain affects millions worldwide. This guide explores its causes, types, and the latest management strategies to help you find relief.",
      date: "July 10, 2025",
      author: "Dr. Sachin Mittal",
    },
    {
      id: 2,
      title: "The Role of Physical Therapy in Pain Management",
      slug: "physical-therapy-pain-management",
      image: "/images/blog.png",
      excerpt: "Discover how physical therapy can be a cornerstone of your pain recovery journey, focusing on strengthening, flexibility, and mobility.",
      date: "July 05, 2025",
      author: "Clinic Team",
    },
    {
      id: 3,
      title: "Navigating Sciatica: Symptoms, Diagnosis, and Treatment",
      slug: "navigating-sciatica",
      image: "/images/blog.png",
      excerpt: "Sciatica can be debilitating. Learn about its tell-tale symptoms, how it's diagnosed, and the effective treatments available at our clinic.",
      date: "June 28, 2025",
      author: "Dr. Sachin Mittal",
    },
    {
      id: 4,
      title: "Regenerative Medicine: The Future of Pain Relief?",
      slug: "regenerative-medicine",
      image: "/images/blog.png",
      excerpt: "Explore the exciting advancements in regenerative medicine and how these innovative therapies are offering new hope for long-term pain relief.",
      date: "June 20, 2025",
      author: "Research Team",
    },
    {
      id: 5,
      title: "Tips for Managing Arthritis Pain Daily",
      slug: "managing-arthritis-pain",
      image: "/images/blog.png",
      excerpt: "Simple yet effective tips to help you manage arthritis pain in your daily life, from exercise routines to dietary considerations.",
      date: "June 15, 2025",
      author: "Clinic Team",
    },
    {
      id: 6,
      title: "Headache vs. Migraine: Knowing the Difference and Treatment",
      slug: "headache-vs-migraine",
      image: "/images/blog.png",
      excerpt: "Distinguishing between a common headache and a migraine is crucial for effective treatment. Learn about their unique characteristics and management.",
      date: "June 08, 2025",
      author: "Dr. Sachin Mittal",
    },
  ];

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

      // Staggered animation for each blog card
      blogCardRefs.current.forEach((card, index) => {
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Latest Articles
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-700">Blog Posts</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Stay informed with expert insights, health tips, and the latest advancements in pain management.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              ref={(el) => (blogCardRefs.current[index] = el)} // Assign ref for GSAP animation
              className="bg-white rounded-2xl shadow-xl py-0 overflow-hidden flex flex-col transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  className="transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-0 flex-grow">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                  <User className="w-4 h-4 ml-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <Button
                  asChild // Renders as a child element, allowing it to be a link
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 shadow-md transition-all duration-200"
                >
                  {/* In a real Next.js app, use <Link href={post.link}> for client-side navigation */}
                  <a href={`/blogs/${post.id}`} className="flex items-center justify-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;
