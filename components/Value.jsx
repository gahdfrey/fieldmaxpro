import Link from "next/link";
import Image from "next/image";
import ValueImg from "../public/assets/let_us_help.png";
import React, { useState } from "react";
import Modal from "../components/Modal";

function Value() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#f9f9f9] w-full">
      <div className="max-w-[1170px] mx-auto px-4 bg-[#ebf4ff] grid sm:grid-cols-2 gap-8 py-[120px]">
        <div className="relative w-full min-h-[450px] ">
          <Image
            src={ValueImg}
            alt="/"
            layout="fill"
            className="object-contain w-full "
          />
        </div>
        {/* <div className="relative w-full ">
        <Image
          src={ValueImg}
          alt="/"
          width={950}
          height={750}
          layout="responsive"
        />
      </div> */}

        <div className="md:ml-[97.5px] px-[15px]">
          <h2 className="text-[48px] font-bold mb-[30px] mt-12 leading-[60px] font-roboto">
            Let&rsquo;s help you get more value from your fieldforce
          </h2>
          <p className="text-[16px] font-roboto text-[#666666] leading-7 mb-4 ">
            FieldMaxPro is designed to work with various business verticals, be
            it Telecoms, Pharmaceuticals, FMCG&rsquo;s, Foods and Beverages, etc. Our
            FieldMaxPro Solution allows your sales team to become more efficient
            and increase productivity.
          </p>
          <button
            className="text-white cursor-pointer text-[16px] hover:bg-[#ff6047]  bg-[#6e7e8f] px-[35px] leading-[54px] font-medium mt-12 rounded-sm text-center "
            onClick={() => setShowModal(true)}
          >
            Try it now for free!
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Value;
