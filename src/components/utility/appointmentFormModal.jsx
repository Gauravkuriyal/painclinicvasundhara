"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, Calendar, Clock, MessageSquare, Send } from "lucide-react";

export default function AppointmentFormModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    patientName: "",
    contactNumber: "",
    email: "",
    date: "",
    time: "",
    concern: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Appointment form submitted:", formData);
      setFormStatus({ type: "success", message: "Appointment request sent successfully!" });
      setFormData({
        patientName: "",
        contactNumber: "",
        email: "",
        date: "",
        time: "",
        concern: "",
      });
      setTimeout(() => setIsOpen(false), 2000); // Close modal after 2 seconds
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-gray-50 rounded-xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-teal-600" />
            Book an Appointment
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
                <User className="h-5 w-5 text-teal-600" />
                Patient Name
              </label>
              <Input
                id="patientName"
                type="text"
                name="patientName"
                placeholder="Your Name"
                value={formData.patientName}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-600" />
                Contact Number
              </label>
              <Input
                id="contactNumber"
                type="number"
                name="contactNumber"
                placeholder="Your Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5 text-teal-600" />
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-600" />
                Select Date
              </label>
              <Input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600" />
                Select Time
              </label>
              <Input
                id="time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="concern" className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              Concern
            </label>
            <Textarea
              id="concern"
              name="concern"
              placeholder="Describe your condition"
              value={formData.concern}
              onChange={handleChange}
              required
              className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 h-32 rounded-md"
            />
          </div>
          {formStatus && (
            <p
              className={`text-sm ${
                formStatus.type === "success" ? "text-green-600" : "text-red-600"
              } animate-fade-in`}
            >
              {formStatus.message}
            </p>
          )}
          <DialogFooter className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-300 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 rounded-md"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}