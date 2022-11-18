import Image from "next/image";
import React from "react";
import Link from "next/link";
import MainLogo from "../public/assets/home-2.png";
import Google from "../public/assets/Google.png";
import Video from "../public/assets/Video.png";

const Main = () => {
  return (
    <div id="home" className="h-[53rem]  max-w-[1170px] mx-auto px-2 py-[180px]">
     
      <h2 className="text-5xl font-roboto sm:text-center font-bold md:mb-[30px] leading-[60px] text-[#171614]">
        Field Force Management Automation -
        Reimagined.
      </h2>
      <div className="relative w-full md:h-[30rem] h-[20rem] mx-auto">
        <Image src={MainLogo} alt="/" layout='fill' className="object-contain" />
      </div>
      <div className="flex flex-row gap-4 justify-center md:mt-8">
      <Image
      src={Google}
      alt="/"
      width={120}
      height={35}
      layout="intrinsic"
      className="rounded"
    /> 
    <Image
    src={Video}
    alt="/"
    width={120}
      height={35}
    layout="intrinsic"
    className="rounded"
  /> 
      </div>
      
    </div>
  );
};

export default Main;

// min-h-[450px]

// className="w-full object-contain"

{
  /* <div className="mt-[20px] py-[120px] flex flex-col items-center max-w-[1240px] ">
        <h1 className="text-5xl font-bold mb-[30px] leading-normal">
          Field Force Management Automation -<br/>Reimagined.
        </h1>
      <div className="relative w-full h-[30rem] mx-auto">
        <Image src={MainLogo} alt="/" layout='fill' className="object-contain" />
      </div>
      </div>  */
}

// 

{/* <Image
              src={OverviewImg}
              alt="/"
              width={650}
              height={900}
              layout="intrinsic"
            /> */}
