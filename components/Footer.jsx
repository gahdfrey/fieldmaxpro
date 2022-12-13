import React from "react";

import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF
} from "react-icons/fa";


function Footer() {
  return (
    <div className="max-w-[1170px]  mx-auto px-2 pt-[120px] pb-4 flex flex-col sm:flex-col justify-center items-center">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-[24px] font-roboto mb-6 text-black font-medium leading-[50px]">
            About
          </h3>
          <div className="leading-[28px] text-base font-lato mb-4 text-[#666666] ">
            <p>
              FieldMaxPro is a product of Papyrus Digital Solutions Ltd.
              <br />
              We are the leading provider of Fieldforce Automation Solution.
            </p>
          </div>

          <div className="flex items-center w-full gap-2 mt-4">
            <a
             href="https://bit.ly/32hCWTR"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-100 hover:scale-105">
                <FaFacebookF className="text-[#666666]"/>
              </div>
            </a>
            <a
              href="https://instagram.com/fieldmaxpro.ng?igshid=YWJhMjlhZTc="
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-100 hover:scale-105">
                <FaInstagram className="text-[#666666]"/>
              </div>
            </a>
            <a
               href="https://bit.ly/3gfUAjm"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-100 hover:scale-105">
              <FaLinkedinIn  className="text-[#666666]"/>
              </div>
            </a>
            <a
               href="https://www.youtube.com/channel/UCiUwB1lHj9awlb0dq4O_Jhg"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-100 hover:scale-105">
                <FaYoutube className="text-[#666666]"/>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-roboto mb-6 text-black font-medium leading-[50px]">
            Contact
          </h3>
          <div className="leading-[28px] text-base font-lato mb-4 text-[#666666] ">
            <p className="mb-5">
              Address: 8b Dipo Awolesi Street, Magodo G.R.A Phase 2, Lagos
              Nigeria
            </p>
            <p className="mb-5">Email: info@fieldmaxpro.com</p>
            <p className="mb-5">Call: +234 903 983 9166</p>
          </div>
        </div>
        <div className="text-[#666666] ">
          <h3 className="text-[24px] font-roboto mb-6 text-black font-medium leading-[50px]">
            Quick Links
          </h3>
          <ul>
            <li className="mb-2 hover:text-[#ff6047]">Overview</li>
            <li className="mb-2 hover:text-[#ff6047]">Our Team</li>
            <li className="mb-2 hover:text-[#ff6047]">Pricing</li>
            <li className="mb-2 hover:text-[#ff6047]">Privacy policy</li>
          </ul>
        </div>
        <div className="text-[#666666] ">
          <h3 className="text-[24px] font-roboto mb-6 text-black font-medium leading-[50px]">
            Help Links
          </h3>
         
          <ul>
            <li className="mb-2 hover:text-[#ff6047]">Support</li>
            <li className="mb-2 hover:text-[#ff6047]">Knowledge Base</li>
            <li className="mb-2 hover:text-[#ff6047]">Blog</li>
            <li className="mb-2 hover:text-[#ff6047]">How To Videos</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full border-t-2 mt-20 solid py-4 text-[#666666] ">
        <div>
          <p>© 2022 FieldMaxPro. All rights reserved.</p>
        </div>
        <div>
          <p>
            A product of{" "}
            <span className="text-[#ff6047]">
              Papyrus Digital Solutions Limited
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
