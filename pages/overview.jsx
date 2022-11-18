import Image from "next/image";
import Link from "next/link";
import OverviewImg from "../public/assets/Overview_2a.png";
import RetailImg from "../public/assets/Untitled.png";
import OutletImg from "../public/assets/outlet2.png";
import SalesImg from "../public/assets/order2.png";
import BrandImg from "../public/assets/Overview_6.png";
import InventoryImg from "../public/assets/Macbook Pro Mockup (15 inch).png";
import Modal from "../components/Modal";
import { FaLongArrowAltRight } from "react-icons/fa";
import React, { useState } from "react";
// import { motion, Variants } from "framer-motion";

// const imageAnimate = {
//   offscreen: { x: -100, opacity: 0 },
//   onscreen: {
//     x: 0,
//     opacity: 1,
//     rotate: [0, 10, 0],
//     transition: { type: "spring", bounce: 0.4, duration: 2 },
//   },
// };

// const textAnimate = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", bounce: 0.4, duration: 3 },
//   },
// };

const Overview = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    // flex md:flex-row max-w-[1240px] mx-auto px-2 py-[120px]
    //
    <>
      <div className="">
        <div className="max-w-[1170px] mx-auto md:grid grid-cols-2 gap-8 px-2 py-[120px]">
          {/* <div className="relative w-full h-[70rem]">
        <Image src={OverviewImg} alt="/"  layout="responsive" className="object-contain" />
      </div> */}
          <div className="w-full h-auto m-auto md:flex items-center justify-center p-4 hidden">
            <Image
              src={OverviewImg}
              alt="/"
              width={650}
              height={900}
              layout="intrinsic"
            />
          </div>

          <div className="md:p-12 md:ml-[8.333333%]">
            <h1 className="text-md font-lato font-semi-bold mb-4 text-[#E03E27]">
              What is FieldMaxPro
            </h1>
            <h2 className="text-[46px] leading-[60px] font-bold mb-[40px]">
              Make your fieldforce efficient
            </h2>
            <div className="py-2 leading-7">
              <p className="font-lato mb-4 text-[16px] text-[#666666]">
                FieldMaxPro is an enterprise fieldforce management system
                designed for Sales/Marketing Managers and their Field
                Representatives in retail, pharmaceuticals and fmcg’s that sell
                consumer packaged and pharmaceutical products through a
                widespread retail chain.
              </p>
              <p className="font-lato mb-4 text-[16px] text-[#666666]">
                Working online and offline, field reps can collect business
                data, competitor data, measure retail visibility, measure
                product availability, plan and share work plans with their
                Managers.
              </p>
              <p className="font-lato mb-4 text-[16px] text-[#666666]">
                The Managers also can influence field activities and take
                informed business decisions with business and competitor
                insights from the field.
              </p>
              <p className="font-lato mb-4 text-[16px] text-[#666666]">
                FieldMaxPro help you ensure that your reps are visiting the
                right customers. You can adequately track what customer is being
                visited, where and when.
              </p>
              <p className="font-lato mb-4 text-[16px] text-[#666666]">
                The geo-tracking and geo-fencing features are such that you
                never get the wrong report from your field sales team.
              </p>
            </div>
            <div className="py-2">
              <button
                className="text-[16px] font-roboto leading-[54px] font-medium text-white cursor-pointer list-none bg-[#ff6047] px-[35px] py-[2px] rounded-md flex flex-row items-center"
                onClick={() => setShowModal(true)}
              >
                Get In touch <FaLongArrowAltRight className="h-4 w-8" />
              </button>
              {/* <button
            className="text-white cursor-pointer text-[16px] hover:bg-[#ff6047]  bg-[#6e7e8f] px-[35px] leading-[54px] font-medium mt-12 rounded-sm text-center "
            onClick={() => setShowModal(true)}
          >
            Try it now for free!
          </button> */}
            </div>
          </div>
        </div>
        {/* md:grid grid-cols-2 */}
        <div className="bg-[#f9f9f9] w-full flex flex-col">
          <div className="max-w-[1240px] mx-auto py-[120px] ">
            <div className="grid md:grid-cols-2 gap-4 px-2 py-4">
              <div>
                <Image
                  src={OutletImg}
                  alt="/"
                  width={750}
                  height={400}
                  layout="intrinsic"
                />
              </div>
              
            
              <div className="px-[15px] md:ml-[100px] pb-[120px]">
                <h1 className="text-[16px] font-medium mb-1 text-[#ff6047] font-lato">
                  Outlet Management
                </h1>
                <h2 className="text-5xl font-roboto font-bold leading-[60px] mb-[40px]">
                  Ensure no customer is left behind
                </h2>
                <p className="text-[16px] font-lato mb-4 leading-7 text-[#666666]">
                  With FieldMaxPro, you can be sure that your customers would
                  never be neglected. Keep adequate track of who your fieldforce
                  are visiting and when. The analytics would help you spot
                  quickly and ensure proper coverage of your customers by your
                  field team.
                </p>
              </div>
              </div>
         
          <div className="grid md:grid-cols-2 gap-4 px-2 py-4">
          <div className="px-[15px] md:mr-[100px] pb-[120px] order-last md:order-first">
                <h1 className="text-[16px] font-medium mb-1 text-[#ff6047] font-lato">
                  Retail Audit
                </h1>
                <h2 className="text-5xl font-roboto font-bold leading-[60px] mb-[40px]">
                  Track your competition
                </h2>
                <p className="text-[16px] font-lato mb-4 leading-7 text-[#666666]">
                  FieldMaxPro enables you to collect and analyse competitive
                  analysis of your products against similar products of any of
                  your competitor. This enables you have the right data to
                  measure your product performance in the market. It gives you
                  steps ahead of the market.
                </p>
              </div>

              <div className="order-first md:order-last">
                <Image
                  src={RetailImg}
                  alt="/"
                  width={650}
                  height={500}
                  layout="intrinsic"
                />
              </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 px-2 py-4">
          <div>
                <Image
                  src={SalesImg}
                  alt="/"
                  width={850}
                  height={800}
                  layout="intrinsic"
                />
              </div>
              <div className="px-[15px] md:ml-[100px] pb-[120px]">
                <h1 className="text-[16px] font-medium mb-1 text-[#ff6047] font-lato">
                  Orders & Sales
                </h1>
                <h2 className="text-5xl font-roboto font-bold leading-[60px] mb-[40px]">
                  Track what your field force is selling
                </h2>
                <p className="text-[16px] font-lato mb-4 leading-7 text-[#666666]">
                  With FieldMaxPro your fieldforce is able to report on their
                  daily orders, sales, conversion rate. Perform pre-selling and
                  van-selling/ready-stock to your customers. We also have
                  features such as Credit Management and Account Receiveables
                  depending on your company setup.
                </p>
              </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 px-2 py-4">
          <div className="px-[15px] md:mr-[100px] pb-[120px] order-last md:order-first">
                <h1 className="text-[16px] font-medium mb-1 text-[#ff6047] font-lato">
                  Brand Visibility
                </h1>
                <h2 className="text-5xl font-roboto font-bold leading-[60px] mb-[40px]">
                  Measure brand visibility. Be noticed!
                </h2>
                <p className="text-[16px] font-lato mb-4 leading-7 text-[#666666]">
                  FieldMaxPro adequately help you gather data to measure the
                  visibility of your brand. You can track all your available
                  Point-of-Sale materials in the field. FieldMaxPro enables you
                  collect and compare you visibility versus your closest rival.
                  Our analytics also give you graphical presentations of your
                  visibility reporting.
                </p>
              </div>
              <div className="order-first md:order-last">
                <Image
                  src={BrandImg}
                  alt="/"
                  width={750}
                  height={400}
                  layout="intrinsic"
                />
              </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 px-2 pt-4">
          <div>
                <Image
                  src={InventoryImg}
                  alt="/"
                  width={750}
                  height={400}
                  layout="intrinsic"
                />
              </div>
              <div className="px-[15px] md:ml-[100px] pb-[120px]">
                <h1 className="text-[16px] font-medium mb-1 text-[#ff6047] font-lato">
                  Inventory Management
                </h1>
                <h2 className="text-5xl font-roboto font-bold leading-[60px] mb-[40px]">
                  Track warehouse & working inventories
                </h2>
                <p className="text-[16px] font-lato mb-4 leading-7 text-[#666666]">
                  FieldMaxPro ensures that your stocks are accounted for. With
                  FieldMaxPro you can be sure that no one is selling what has
                  not been provisioned or accounted for. The inventory
                  management module help is dynamic and in compliance with your
                  organisational setup.
                </p>
              </div>
          </div>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Overview;
