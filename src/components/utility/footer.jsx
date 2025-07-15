"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    setShowNewsletter(true);
  }, []);

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-24 pb-12 overflow-hidden"> {/* Adjusted gradient and increased padding */}
      {/* Subtle background overlay for texture if desired */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/subtle-pattern.png")', backgroundSize: 'contain' }}>{/* Placeholder for subtle pattern */}</div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"> {/* Increased gaps significantly */}
          {/* Clinic Info */}
          <div className="space-y-6"> {/* Increased vertical spacing */}
            <h3 className="text-4xl font-extrabold mb-5 text-white tracking-tight drop-shadow-sm">Advance Pain Care</h3> {/* Larger, more prominent clinic name */}
            <p className="text-base leading-relaxed text-gray-400"> {/* Slightly larger text for main description */}
              Your trusted partner for innovative pain management and lasting relief. Dedicated to restoring your well-being with compassionate, expert care.
            </p>
            <ul className="space-y-4 text-sm text-gray-300"> {/* Increased spacing for list items */}
              <li className="flex items-start gap-4"> {/* Increased gap for icon and text */}
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Kaushambi, Ghaziabad, UP, India - 201010</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <Link href="tel:+911234567890" className="hover:text-blue-300 transition-colors">+91 123-456-7890</Link>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <Link href="mailto:info@painclinicvasundhara.com" className="hover:text-blue-300 transition-colors">info@painclinicvasundhara.com</Link>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>Mon - Sat: 9 AM - 6 PM</span>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-6 mt-8"> {/* Larger gap, more margin */}
              <Link href="#" title="Facebook" aria-label="Facebook" className="p-3 rounded-full bg-gray-700/60 hover:bg-blue-600/70 text-white transition-all transform hover:scale-110 shadow-md"> {/* Darker background, more prominent hover */}
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" title="Twitter" aria-label="Twitter" className="p-3 rounded-full bg-gray-700/60 hover:bg-blue-400/70 text-white transition-all transform hover:scale-110 shadow-md">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" title="Instagram" aria-label="Instagram" className="p-3 rounded-full bg-gray-700/60 hover:bg-pink-500/70 text-white transition-all transform hover:scale-110 shadow-md">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" title="YouTube" aria-label="YouTube" className="p-3 rounded-full bg-gray-700/60 hover:bg-red-600/70 text-white transition-all transform hover:scale-110 shadow-md">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Newsletter & Key Treatments */}
          <div className="space-y-6">
            {/* Newsletter Card */}
            {/* <div className={`
                newsletter-card
                bg-gray-700/50 backdrop-blur-lg border border-gray-600
                p-8 rounded-2xl shadow-xl
                transition-all duration-1000 ease-out
                ${showNewsletter ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
              `}> 
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Connected</h3> 
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Get the latest insights on pain management and clinic updates directly to your inbox.
              </p>
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors py-2.5"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div> */}

            {/* Key Treatments Section - Improved Layout */}
            <h3 className="text-2xl font-bold mb-2 text-white">Our Key Treatments</h3> {/* More spacing, clearer title */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-base"> {/* 2-column grid for treatments */}
              {[
                { title: "PRP Therapy", href: "/treatments/prp-therapy" },
                { title: "Back & Spine Care", href: "/treatments/back-pain" },
                { title: "Joint Pain Solutions", href: "/treatments/joint-pain" },
                { title: "Non-Surgical Alternatives", href: "/treatments/non-surgical" },
                { title: "Sports Injury Rehab", href: "/treatments/sports-injury" },
                { title: "Neuropathic Pain Mgmt.", href: "/treatments/nerve-pain" },
                { title: "Muscular Pain Therapy", href: "/treatments/muscular-pain" },
                { title: "Knee Pain Solutions", href: "/treatments/knee-pain" },
              ].map((treatment) => (
                <Link
                  key={treatment.title}
                  href={treatment.href}
                  className="flex items-center group text-gray-300 hover:text-blue-300 transition-colors duration-200"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  {treatment.title}
                </Link>
              ))}
            </div>
            <Link
              href="/treatments-we-offer"
              className="text-blue-400 hover:underline hover:text-blue-300 transition-colors duration-200 mt-5 inline-block font-semibold"
            >
              View All Treatments
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-base"> {/* Slightly larger text for links */}
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
                { title: "Services", href: "/services" },
                { title: "Blogs", href: "/blogs" },
                { title: "Gallery", href: "/gallery" },
                { title: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-center group hover:text-blue-300 transition-colors duration-200"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link
                  href="/sitemap"
                  className="flex items-center group text-blue-400 hover:text-blue-300 transition-colors duration-200 mt-2"
                >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    Sitemap
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Popular Blogs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Popular Blogs</h3>
            <ul className="space-y-3 text-base">
              {[
                { title: "Understanding PRP Therapy", href: "/blogs/prp-therapy" }, // More descriptive titles
                { title: "Solutions for Chronic Back Pain", href: "/blogs/back-pain" },
                { title: "Managing Joint Pain Effectively", href: "/blogs/joint-pain" },
                { title: "Advanced Cancer Pain Management", href: "/blogs/cancer-pain" },
              ].map((blog) => (
                <li key={blog.title}>
                  <Link
                    href={blog.href}
                    className="flex items-center group hover:text-blue-300 transition-colors duration-200"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {blog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blogs"
                  className="text-blue-400 hover:underline hover:text-blue-300 transition-colors duration-200 mt-3 inline-block font-semibold"
                >
                  View All Blogs
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-gray-700/60 text-center text-sm text-gray-400"> {/* Increased margin-top, slightly stronger border */}
          <p>
            &copy; {new Date().getFullYear()} Advance Pain Care Clinic. All rights reserved.
            <span className="mx-3 hidden md:inline">|</span>
            <br className="md:hidden"/>
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>{" "}
            <span className="mx-3">|</span>{" "}
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}