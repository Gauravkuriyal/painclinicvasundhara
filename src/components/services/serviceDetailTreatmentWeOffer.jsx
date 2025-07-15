"use client";
import React from 'react';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'; // Shadcn Tabs
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Shadcn Card
import { Phone, Mail, MapPin } from 'lucide-react'; // Lucide icons

const ServiceDetailSection = ({serviceData}) => {
  // Dummy data for the product/service

  const contactInfo = {
    address: "C-70, SECOND FLOOR OFFICE - A, DDA SHEDS, OKHLA INDUSTRIAL AREA, PHASE-1, NEW DELHI-110020",
    phone1: "+91-9007090388",
    phone2: "+91-8750275027",
    email1: "contact@impomedhealthcare.com",
    email2: "rahman@impome",
    email3: "mohan.singh@impome",
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-inter overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column: Product/Service Details */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
              {serviceData.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
              {serviceData.type}
            </p>

            {/* Tabs for Description, Composition, etc. */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto p-1 bg-gray-200 rounded-lg mb-6">
                {serviceData.tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md py-2 px-4"
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {serviceData.tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <Card className="rounded-xl shadow-lg p-6 bg-white">
                    <CardContent className="p-0 prose prose-lg max-w-none text-gray-800 leading-relaxed [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_strong]:font-semibold [&_a]:text-blue-600 [&_a:hover]:underline [&_ul]:list-disc [&_ol]:list-decimal [&_li]:mb-1 [&_p]:mb-4">
                      <div dangerouslySetInnerHTML={{ __html: tab.contentHtml }} />
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Right Column: Contact Us Sidebar */}
          <div className="w-full lg:w-1/3">
            <Card className="rounded-xl shadow-xl p-6 bg-white sticky top-24"> {/* Sticky for better UX */}
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-blue-600 mt-1" />
                  <p>{contactInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <a href={`tel:${contactInfo.phone1}`} className="hover:underline">{contactInfo.phone1}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <a href={`tel:${contactInfo.phone2}`} className="hover:underline">{contactInfo.phone2}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <a href={`mailto:${contactInfo.email1}`} className="hover:underline">{contactInfo.email1}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <a href={`mailto:${contactInfo.email2}`} className="hover:underline">{contactInfo.email2}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <a href={`mailto:${contactInfo.email3}`} className="hover:underline">{contactInfo.email3}</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
