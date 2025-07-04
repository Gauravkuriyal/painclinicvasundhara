"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Calendar,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  ChevronDown,
  BookOpen,
  Users,
  Mail,
  Image as ImageIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import AppointmentFormModal from "./appointmentFormModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        #headerContainer,
        header {
          z-index: 50;
        }
        #headerContainer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          border-radius: 100px;
          background-color: white;
          z-index: -1;
          transition: all 0.5s ease-in-out;
          transform: scaleX(${isScrolled ? "1" : "0"});
          transform-origin: center;
          box-shadow: ${isScrolled ? "0 2px 6px rgba(0, 0, 1, 0.1)" : "none"};
        }
      `}</style>
      <header className="fixed top-0 left-0 flex justify-between items-center w-full px-[5%] my-[1%]">
        <div id="headerContainer" className="relative flex justify-between items-center w-full px-[1%]">
          <div className="header_logo_container w-fit">
            <Link href={"/"} title="Home Page" className="block relative h-[40px] w-[200px] flex-shrink-0">
              <Image src={"/images/logo.png"} alt="logo" title="logo" fill className="object-contain" />
            </Link>
          </div>

          <nav className={"w-fit flex items-center gap-5 bg-none rounded-full px-4 py-2 " + (isScrolled ? "text-black" : "text-white")}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"hover:text-blue-400 bg-transparent font-normal"}>
                    <Link href={"#"} title="Services" className="font-normal hover:text-blue-400">
                      Services
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:w-[750px] md:grid-cols-3 lg:w-[900px]">
                      <li className="row-span-3 min-w-[200px]">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-br from-blue-300 to-indigo-600 p-6 no-underline outline-none focus:shadow-md text-white"
                            href="/" title="home"
                          >
                            <CircleCheckIcon className="h-10 w-10 mb-1 text-white" />
                            <div className="mb-2 text-xl font-semibold text-white">Pain Care</div>
                            <p className="text-muted-foreground text-sm text-white/90 leading-tight">
                              Your trusted partner for a healthier, pain-free tomorrow.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <div>
                        <h3 className="mb-3 font-semibold text-lg text-gray-800">Conditions We Treat</h3>
                        <ListItem href={"#"} title="Backache and Slip Disc">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Upper Back Pain">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Neck Pain">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Rheumatoid Arthritis">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="See all >>" className={"text-blue-400"}></ListItem>
                      </div>
                      <div>
                        <h3 className="mb-3 font-semibold text-lg text-gray-800">Treatments Offered</h3>
                        <ListItem href={"#"} title="PRP Technique">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Ozone Therapy">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Epidural Technique">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="Laser Therapy">
                          Back pain is a common complaint. Four out of five people will experience lower back pain
                        </ListItem>
                        <ListItem href={"#"} title="See all >>" className={"text-blue-400"}></ListItem>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"font-normal bg-transparent hover:text-blue-400"}>
                    Pain
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                      <ListItem href="#" title="Understanding Pain">
                        <CircleHelpIcon className="h-5 w-5 mr-2 my-2 text-gray-600 inline-block" />
                        Learn about the different types of pain and how they affect your body.
                      </ListItem>
                      <ListItem href="#" title="Why Comprehensive Treatment">
                        <CircleCheckIcon className="h-5 w-5 mr-2 my-2 text-gray-600 inline-block" />
                        Discover our holistic approach to pain management for lasting relief.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"font-normal bg-transparent hover:text-blue-400"}>
                    <Link href={"#"} title="Blogs">
                      Blogs
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <h3 className="mb-1 pt-4 px-4 font-semibold text-lg text-gray-800">Popular Blogs</h3>
                    <ul className="grid gap-4 w-[500px] gap-3 p-4 pt-2">
                      <ListItem href="#" title="PRP Therapy for Pain">
                        <BookOpen className="h-5 w-5 mr-4 my-2 text-gray-600 inline-block" />
                        PRP Therapy for pain in Kaushambi is expertly offered by Dr. Sachin Mittal at Advance Pain Care Clinic, where patients r
                      </ListItem>
                      <ListItem href="#" title="Back Pain Specialist">
                        <BookOpen className="h-5 w-5 mr-4 my-2 text-gray-600 inline-block" />
                        Dr. Sachin Mittal at Advance Pain Care Clinic is widely recognized as the best back pain specialist in Kaushambi, offeri
                      </ListItem>
                      <ListItem href="#" title="Joint Pain Specialist">
                        <BookOpen className="h-5 w-5 mr-4 my-2 text-gray-600 inline-block" />
                        Advance Pain Care Clinic in Kaushambi is a trusted destination for individuals seeking expert treatment for joint pain.
                      </ListItem>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link href={"#"}>
                            <div className="font-medium text-blue-400">See all blogs</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={"hover:text-blue-400"}>
                    <Link href={"#"} title="Gallery Page">
                      Gallery
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={"hover:text-blue-400"}>
                    <Link href={"#"} title="About Page">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={"hover:text-blue-400"}>
                    <Link href={"#"} title="Contact Page">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="w-fit">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex items-center gap-3 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <AppointmentFormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          </div>
        </div>
      </header>
    </>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props} style={{ minWidth: "300px" }}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium mb-1">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}