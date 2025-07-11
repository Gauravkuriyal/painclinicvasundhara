"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, ChevronDown, ChevronUp, CheckCircle2, XCircle, Clock } from "lucide-react"; // Added Clock for business hours

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // { type: "success" | "error", message: string }
  // const [showMap, setShowMap] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To trigger entrance animations

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null); // Clear previous status

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Increased delay for better feedback visibility
      console.log("Form submitted:", formData);
      setFormStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Simulate confetti animation (removed, as it's a dark theme element. Could be re-added differently)
      // const confetti = document.querySelector(".confetti");
      // if (confetti) {
      //   confetti.classList.add("animate-confetti");
      //   setTimeout(() => confetti.classList.remove("animate-confetti"), 3000);
      // }
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Trigger animations after component mounts
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Subtle Background Blobs (Light theme friendly) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ transform: 'translate(-50%, -50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" style={{ transform: 'translate(50%, 50%)' }}></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up drop-shadow-sm">
          Get in Touch with Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Details Card */}
          <div
            className={`
              bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100
              transition-all duration-700 ease-out
              ${isMounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Contact Info</h3>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Phone Numbers:</p>
                  <a href="tel:+919582714141" className="hover:text-blue-700 transition-colors block">+91 95827 14141</a>
                  <a href="tel:+1204359776" className="hover:text-blue-700 transition-colors block">+1 204 359 776</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Email Address:</p>
                  <a href="mailto:painclinic2010@gmail.com" className="hover:text-blue-700 transition-colors">painclinic2010@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Working Hours:</p>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">(Sunday & Public Holidays Closed)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Clinic 1 (Vasundhara):</p>
                  <address className="not-italic text-sm leading-relaxed text-gray-700">
                    OM PLAZA, Sector 15, Vasundhara,<br />Ghaziabad, Uttar Pradesh 201012, India
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Clinic 2 (Indirapuram):</p>
                  <address className="not-italic text-sm leading-relaxed text-gray-700">
                    Advance Pain Care Clinic, 249, GF, Shakti Khand 3,<br />Indirapuram, Ghaziabad, Uttar Pradesh, India
                  </address>
                </div>
              </li>
            </ul>
            {/* Map Toggle Button */}
            {/* <Button
              onClick={() => setShowMap(!showMap)}
              className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              {showMap ? "Hide Clinic Locations" : "Show Clinic Locations on Map"}
              {showMap ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button> */}
          </div>

          {/* Contact Form */}
          <div
            className={`
              bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100
              transition-all duration-700 ease-out delay-150 // Staggered entry
              ${isMounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 py-3.5 px-4 rounded-lg text-gray-800 placeholder-gray-500 shadow-sm"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 py-3.5 px-4 rounded-lg text-gray-800 placeholder-gray-500 shadow-sm"
                />
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 py-3.5 px-4 rounded-lg text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 py-3.5 px-4 rounded-lg text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-36 resize-y py-3.5 px-4 rounded-lg text-gray-800 placeholder-gray-500 shadow-sm"
              />
              {formStatus && (
                <p
                  className={`text-sm md:text-base font-medium text-center flex items-center justify-center gap-2 py-2 px-4 rounded-md animate-fade-in
                    ${formStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                  `}
                >
                  {formStatus.type === "success" ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  {formStatus.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 rounded-full border-2 border-t-2 border-white/50 border-t-white"></span> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        {/* {showMap && ( */}
          <div
            className={`
              mt-16 grid grid-cols-1 md:grid-cols-2 gap-8
              transition-all duration-700 ease-out animate-fade-in-up
            `}
          >
            <div className="rounded-xl overflow-hidden shadow-xl aspect-video border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7146510739743!2d77.3690584!3d28.642718099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57a2c7b2d3b:0x4b7b5b5b5b5b5b5b!2sOM%20Plaza%2C%20Sector%2015%2C%20Vasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012%2C%20India!5e0!3m2!1sen!2sin!4v1730346000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic 1 Location"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl aspect-video border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7146510739743!2d77.3650584!3d28.638718099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5c1b2d3b1a5:0x6c1b6b6b6c6b6b6b!2sAdvance%20Pain%20Care%20Clinic%2C%20249%2C%20GF%2C%20Shakti%20Khand%203%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730346000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic 2 Location"
              />
            </div>
          </div>
        {/* )} */}
      </div>

      {/* Custom CSS for Animations */}
      <style jsx global>{`
        /* General Fade In (for form status) */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }

        /* Fade In Up (for heading and map section) */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }

        /* Blob animation (for decorative background elements) */
        @keyframes blob {
          0% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(0%, -30%) scale(1.1); }
          66% { transform: translate(-30%, 0%) scale(0.9); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}