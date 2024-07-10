import React from "react";
import { Logo } from "./Logo";
import { CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Facebook, Instagram, Mail, X } from "lucide-react";

export const Footer = () => {
  return (
    <div className="mt-5">
      <hr />
      <footer className="pt-5  bg-violet-50">
        <div className="flex flex-col lg:flex-row  max-w-6xl mx-auto px-4 gap-8 my-6">
          <nav className="flex w-full justify-between">
            <div className="col-span-2 w-80 ">
              <CardTitle className="pb-2">
                <Logo />
              </CardTitle>
              <CardDescription className=" text-sm text-gray-500">
                Connecting Talented Freelancers with Global Opportunities
              </CardDescription>
            </div>

            <div className="flex flex-col text-sm gap-2 ">
              <p>About Us</p>

              <p>Contact Us</p>
              <p>FAQs</p>
            </div>
            <div className="flex flex-col text-sm gap-2">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Email Address</p>
              <p>Phone Number</p>
            </div>
            <div className="flex flex-col text-sm gap-2">
              <p>Services</p>
              <p>Pricing</p>
              <p>Blog</p>
            </div>
          </nav>
        </div>
        <hr />
        <div className=" text-center my-6 ">
          <Button
            variant={"outline"}
            className="rounded-full text-violet-700 mx-2 "
          >
            <Facebook />
          </Button>
          <Button variant={"outline"} className="rounded-full text-violet-700 mx-2">
            <X />
          </Button>
          <Button variant={"outline"} className="rounded-full text-violet-700 mx-2">
            <Instagram />
          </Button>
          <Button variant={"outline"} className="rounded-full text-violet-700 mx-2">
            <Mail />
          </Button>
        </div>

        <div className="bg-violet-700 text-white text-center p-2 text-sm ">
          &copy; 2024 ServiceSphere. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
