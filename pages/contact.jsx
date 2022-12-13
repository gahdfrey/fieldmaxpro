import React from "react";
import { FaLinkedinIn, FaInstagramSquare, FaYoutube,} from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

import Link from "next/link";
// import Image from "next/image";
//import contactbg from "../public/assets/Contact_Us_Banner.jpg";

function contact() {
  return (
    <>
      <div className="bg-[url('../public/assets/phone.JPG')] w-full h-[70vh] bg-center bg-cover"></div>
      <div className="flex flex-col py-[120px]">
          
        <div className="px-2 max-w-[1200px] m-auto ">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col bg-white shadow-xl shadow-gray-300 rounded-xl">
              <div className="flex flex-col p-6">
                <h3 className="text-[30px] font-roboto mb-6 font-medium">Find Us on Social</h3>
                <p className="text-[#666666] text-base font-lato mb-4 leading-[28px]">
                  You can reach us on any of our social media platforms.
                </p>
                <div className="p-rbl-10 text-[#666666]">
                  <div className="flex flex-col sm:flex-row">
                    <a
                      className=""
                      href="https://www.youtube.com/channel/UCiUwB1lHj9awlb0dq4O_Jhg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-row items-center duration-300 ease-in cursor-pointer sm:p-3 hover:scale-105">
                        <FaYoutube />  Youtube
                      </div>
                     
                    </a>

                    <a
                      className=""
                      href="https://bit.ly/32hCWTR"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-row items-center duration-300 ease-in cursor-pointer sm:p-3 hover:scale-105">
                        <AiFillFacebook /> Facebook
                      </div>
                      
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                  <a
                      className=""
                      href="https://bit.ly/3gfUAjm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-row items-center duration-300 ease-in cursor-pointer sm:p-3 hover:scale-105">
                        <FaLinkedinIn />  Linkedin
                      </div>
                     
                    </a>

                    <a
                      className=""
                      href="https://instagram.com/fieldmaxpro.ng?igshid=YWJhMjlhZTc="
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-row items-center duration-300 ease-in cursor-pointer sm:p-3 hover:scale-105">
                        <FaInstagramSquare />  Instagram
                      </div>
                     
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white shadow-xl shadow-gray-300 rounded-xl">
              <div className="flex flex-col p-6">
                <h1 className="text-[30px] font-roboto mb-6 font-medium">Contact Us</h1>
                <p className="text-[#666666] text-base font-lato mb-4 leading-[28px]">8b Dipo Awolesi Street, Magodo G.R.A Lagos, Nigeria</p>
                <p className="text-[#666666] text-base font-lato mb-4 leading-[28px]">Phone: +234 903 983 9166, +234 706 199 4440</p>
                <p className="text-[#666666] text-base font-lato mb-4 leading-[28px]">Email: info@fieldmaxpro.com</p>
              </div>
            </div>
            <div className="flex flex-col shadow-xl shadow-gray-300 rounded-xl">
            <iframe style={{width: "100%", height:"100%" }} src="https://maps.google.com/maps?q=%208b%20Dipo%20Awolesi%20Street,%20Magodo%20G.R.A%20Phase%202,%20Lagos%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="mb-6 text-4xl">Get In Touch</h1>
            <form className="flex flex-col gap-8">
              <div className="grid w-full gap-8 md:grid-cols-2">
                <input
                  className=" bg-[#f9f9f9] shadow-lg p-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className=" bg-[#f9f9f9] shadow-lg p-3"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className=" bg-[#f9f9f9] shadow-lg p-3"
                  type="phone"
                  placeholder="Phone"
                />
                <input
                  className=" bg-[#f9f9f9] shadow-lg p-3"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  className=" bg-[#f9f9f9] shadow-lg p-3 w-full"
                  cols="30"
                  rows="8"
                  placeholder="Message"
                ></textarea>
                <button className="rounded-sm shadow-lg px-6 py-4 mt-4 bg-[#ff6047] text-white">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;

