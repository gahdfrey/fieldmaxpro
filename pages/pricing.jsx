import React from "react";
import Image from "next/image";
import retailImg from "../public/assets/retailstore.JPG";
import pharmaImg from "../public/assets/whitepillls.JPG";
import surveyImg from "../public/assets/survey.JPG";
import brandImg from "../public/assets/brand.jpg";
import outletImg from "../public/assets/outlet.JPG";
import Logo from "../public/assets/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import PricingItem from "../components/PricingItem";

const pricing = () => {
  return (
    <div className=" w-full">
      <div className="py-[10rem]">
        <h1 className="text-[60px] mb-12 font-roboto leading-[70px] text-[#171614] font-bold text-center">
          Pricing
        </h1>
        <div className="grid grid-col md:grid-cols-5 p-4 gap-4">
          <div className="flex hover:drop-shadow-[0_55px_20px_rgb(0,0,0,0.25)] rounded-xl flex-col group bg-[#f5f5f5]">
            <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={retailImg}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className=" place-self-end flex flex-col w-[60%]">
              <div className="relative w-full h-full">
                  <Image src={Logo} alt="/"  layout="responsive"
                className="object-cover" />
                  {/* width={300} height={40} */}
                </div>
                <div className="relative before:absolute before:w-[4rem] before:h-[3px] content-none before:top-[26%] before:right-[2.2rem] before:bg-[#E03E27] ml-auto">
                  <h2 className="place-self-end text-md text-[#ff6047] text-[12px] mb-2 font-roboto">
                    Retail
                  </h2>
                </div>
              </div>
              <button className="bg-[#6e7e8f] p-3 rounded-sm group-hover:bg-[#ff6047] text-white flex flex-row items-center justify-center">
                Get in touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
            </div>
          </div>

          <div className="flex  hover:drop-shadow-[0_55px_20px_rgb(0,0,0,0.25)] rounded-xl flex-col group bg-[#f5f5f5]">
            <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={pharmaImg}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-4">
              <div className=" place-self-end flex flex-col w-[60%]">
              <div className="relative w-full h-full">
                  <Image src={Logo} alt="/"  layout="responsive"
                className="object-cover" />
                  {/* width={300} height={40} */}
                </div>
                <div className="relative before:absolute before:w-[4rem] before:h-[3px] content-none before:top-[26%] before:right-[2.9rem] before:bg-[#00c2ff] ml-auto">
                  <h2 className="place-self-end text-md text-[#00c2ff] text-[12px] mb-2 font-roboto">
                    Pharma
                  </h2>
                </div>
              </div>
              <button className="bg-[#6e7e8f] p-3 rounded-sm group-hover:bg-[#ff6047] text-white flex flex-row items-center justify-center">
                Get in touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
            </div>
          </div>

          <div className="flex hover:drop-shadow-[0_55px_20px_rgb(0,0,0,0.25)] rounded-xl flex-col group bg-[#f5f5f5]">
            <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={surveyImg}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-4">
              <div className=" place-self-end flex flex-col w-[60%]">
              <div className="relative w-full h-full">
                  <Image src={Logo} alt="/"  layout="responsive"
                className="object-cover" />
                  {/* width={300} height={40} */}
                </div>
                <div className="relative before:absolute before:w-[4rem] before:h-[3px] content-none before:top-[26%] before:right-[2.6rem] before:bg-[#D8A600] ml-auto">
                  <h2 className="place-self-end text-md text-[#D8A600] text-[12px] mb-2 font-roboto">
                    Survey
                  </h2>
                </div>
              </div>
              <button className="bg-[#6e7e8f] p-3 rounded-sm group-hover:bg-[#ff6047] text-white flex flex-row items-center justify-center">
                Get in touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
            </div>
          </div>

          <div className="flex hover:drop-shadow-[0_55px_20px_rgb(0,0,0,0.25)] rounded-xl flex-col group bg-[#f5f5f5]">
            <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={brandImg}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-4">
              <div className=" place-self-end flex flex-col w-[60%]">
              <div className="relative w-full h-full">
                  <Image src={Logo} alt="/"  layout="responsive"
                className="object-cover" />
                  {/* width={300} height={40} */}
                </div>
                <div className="relative before:absolute before:w-[3rem] before:h-[3px] content-none before:top-[26%] before:right-[5.2rem] before:bg-[#025860] ml-auto">
                  <h2 className="place-self-end text-md text-[#025860] text-[12px] mb-2 font-roboto">
                    Brand Visibility
                  </h2>
                </div>
              </div>
              <button className="bg-[#6e7e8f] p-3 rounded-sm group-hover:bg-[#ff6047] text-white flex flex-row items-center justify-center">
                Get in touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
            </div>
          </div>

          <div className="flex hover:drop-shadow-[0_55px_20px_rgb(0,0,0,0.25)] rounded-xl flex-col group bg-[#f5f5f5]">
            <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={outletImg}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-4">
              <div className="place-self-end flex flex-col w-[60%]">
                <div className="relative w-full h-full">
                  <Image src={Logo} alt="/"  layout="responsive"
                className="object-cover" />
                  {/* width={300} height={40} */}
                </div>

                {/* <div className="relative w-full h-[2rem]">
        <Image src={Logo} alt="/" layout='responsive' className="object-contain" />
      </div> */}
                {/* <div className="relative w-full h-[15rem] mb-2">
              <Image
                src={Logo}
                alt="/"
                layout="fill"
                className="object-cover"
              />
            </div> */}

                {/* <div>
                  <Image src={Logo} alt="/" width={300} height={40} />
                </div> */}
                <div className="relative before:absolute before:w-[2rem] before:h-[3px] content-none before:top-[26%] before:right-[6.9rem] before:bg-[#584E5D] ml-auto">
                  <h2 className="place-self-end text-[12px] mb-2 font-roboto text-[#584E5D] ">
                    Outlet Enumeration
                  </h2>
                </div>
              </div>
              <button className="bg-[#6e7e8f] p-3 rounded-sm group-hover:bg-[#ff6047] text-white flex flex-row items-center justify-center">
                Get in touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;

{
  /* <PricingItem
            CardImage={retailImg}
            logoImg={Logo}
            variant="Retail"
            button="submit"
          />
          <PricingItem
            CardImage={pharmaImg}
            logoImg={Logo}
            variant="Pharma"
            button="submit"
          />
          <PricingItem
            CardImage={surveyImg}
            logoImg={Logo}
            variant="Survey"
            button="submit"
          />
          <PricingItem
            CardImage={brandImg}
            logoImg={Logo}
            variant="Brand"
            button="submit"
          />
          <PricingItem
            CardImage={outletImg}
            logoImg={Logo}
            variant="Outlet"
            button="submit"
          /> */
}
