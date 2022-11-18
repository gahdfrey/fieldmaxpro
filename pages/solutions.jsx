import React from "react";
import retailImg from "../public/assets/retailstore.JPG";
import pharmaImg from "../public/assets/whitepillls.JPG";
import surveyImg from "../public/assets/survey.JPG";
import brandImg from "../public/assets/brand.jpg";
import outletImg from "../public/assets/outlet.JPG";
import Logo from "../public/assets/logo.png";
import { MdOutlineCheck } from "react-icons/md";
import SolutionsItem from "../components/SolutionsItem";
import Image from "next/image";

const solutions = () => {
  return (
    <div className="bg-[#f9f9f9] w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 px-2 py-20 2xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-[60%]">
              <div>
                <Image
                  src={Logo}
                  alt="/"
                  width={400}
                  height={50}
                  layout="intrinsic"
                />
              </div>

              {/* <div className="before:content-[''] w-[10rem] top-10 h-5 bg-[#E03E27] left-10"></div> */}
              <div className="relative before:absolute before:w-[6rem] before:h-[3px] content-none before:top-[36%] before:right-[5rem] before:bg-[#E03E27] ml-auto">
                <h3 className="mb-2 text-[30px] font-roboto text-[#E03E27] font-medium">Retail</h3>
              </div>
            </div>
            <div className="relative w-full min-h-[300px]">
              <Image
                src={retailImg}
                alt="/"
                layout="responsive"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col leading-7 font-lato mb-4 text-base text-[#666666] md:ml-[100px]">
            <p className="mb-4">
              If your organization relies on retail clients to help display and
              sell your products, and you also have field reps who engage those
              retailers to ensure they have products at all times and that your
              brand is visible at retail, then FieldMaxPro Retail is for you.
              FieldMaxPro Retail enables your reps to plan with historical
              knowledge of all engagements with each customer.
            </p>
            <span className="mb-6 font-lato text-[#444444] text-base underline">
              Some Key Features:
            </span>
            <ul className="text-[#6e7e8f] leading-6">
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Build a database of all points of interest, complete with
                  geo-coordinates.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2 mb-5 ">
                  See your outlet distribution with a map view on the dashboard.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Carry out visit activities like product availability checks,
                  sales/orders, merchandising, taking images, notes, and so on.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Access simple tools for planning and tracking field
                  activities.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Time and location stamps on all visits made by reps.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Access the dashboard for analysis on productivity, brand
                  visibility, and so on.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 py-20 2xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-[60%]">
              <div>
                <Image
                  src={Logo}
                  alt="/"
                  width={400}
                  height={50}
                  layout="intrinsic"
                />
              </div>
              <div className="relative before:absolute before:w-[6rem] before:h-[3px] content-none before:top-[36%] before:right-[6.5rem] before:bg-[#00c2ff] ml-auto">
              <h3 className="mb-2 text-[30px] font-roboto text-[#00c2ff] font-medium">
                  Pharma
                </h3>
                
              </div>
            </div>
            <div className="relative w-full min-h-[300px]">
              <Image
                src={pharmaImg}
                alt="/"
                layout="responsive"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col leading-7 font-lato mb-4 text-base text-[#666666] md:ml-[100px]">
            <p className="mb-4">
              FieldMaxPro Pharma was created to meet the needs of the
              pharmaceutical industry specifically. The pharmaceutical industry
              has unique needs when it comes to managing their customers like
              pharmacies, hospitals, and clinics. The intent is not always to
              sell. A lot of times, the intent is more about detailing these
              medical products to the medical community.FieldMaxPro Pharma was
              built to accommodate the requirements of this industry. All the
              basic features of force management tools are also present in
              FieldMaxPro Pharma.
            </p>
            <span className="mb-6 font-lato text-[#444444] text-base underline">
              Some Key Features:
            </span>
            <ul className="text-[#6e7e8f] leading-6">
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Register multiple departments and contacts within healthcare
                  facilities.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2 mb-5 ">
                  Track medical detailing activities, clinical training
                  activities, and so on.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  For informed decision-making, access details of visit
                  activities.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Get insights on product availability levels, and brand
                  visibility against competitors on the dashboard.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Upload training materials to empower reps for detailing
                  activities.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 py-20 2xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-[60%]">
              <div>
                <Image
                  src={Logo}
                  alt="/"
                  width={400}
                  height={50}
                  layout="intrinsic"
                />
              </div>
              <div className="relative before:absolute before:w-[6rem] before:h-[3px] content-none before:top-[36%] before:right-[6rem] before:bg-[#D8A600] ml-auto">
              <h3 className="mb-2 text-[30px] font-roboto text-[#D8A600] font-medium">
                  Survey
                </h3>
              </div>
            </div>
            <div className="relative w-full min-h-[300px]">
              <Image
                src={surveyImg}
                alt="/"
                layout="responsive"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col leading-7 font-lato mb-4 text-base text-[#666666] md:ml-[100px]">
            <p className="mb-4">
              FieldMaxPro Survey gives organizations the ability to collate
              market insights on the go. It is flexible enough to accommodate
              different types of surveys, and the dashboard automatically
              synthesizes the information to present management with actionable
              insights from the survey.
            </p>
            <span className="mb-6 font-lato text-[#444444] text-base underline">
              Some Key Features:
            </span>
            <ul className="text-[#6e7e8f] leading-6">
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Create customized questionnaires.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2 mb-5 pr-[5px]">
                  Collect first-hand information from your target audience.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Dynamic dashboard for analysis of survey data.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Make data-driven decisions backed by insights from the field.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Use insights to provide a tailored experience for your
                  customers.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">Get ahead of the competition.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 py-20 2xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-[60%]">
              <div>
                <Image
                  src={Logo}
                  alt="/"
                  width={400}
                  height={50}
                  layout="intrinsic"
                />
              </div>
              <div className="relative before:absolute before:w-[6rem] before:h-[3px] content-none before:top-[36%] before:right-[12.5rem] before:bg-[#025860] ml-auto">
              <h3 className="mb-2 text-[30px] font-roboto text-[#025860] font-medium">
                  Brand Visibility
                </h3>
              </div>
            </div>
            <div className="relative w-full min-h-[300px]">
              <Image
                src={brandImg}
                alt="/"
                layout="responsive"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col leading-7 font-lato mb-4 text-base text-[#666666] md:ml-[100px]">
            <p className="mb-4">
              FieldMaxPro Brand Visibility is Papyrus Digital Solution’s
              solution to enable organizations to empirically measure the impact
              of their investment in merchandising materials. This enables them
              to measure their share of visibility at retail compared to their
              competition, and this measurement can scale all the way from your
              visibility share in one store to your visibility share in a
              territory, region, or nationwide.
            </p>
            <span className=" font-lato text-[#444444] text-base underline mb-6">
              Some Key Features:
            </span>
            <ul className="text-[#6e7e8f] leading-6">
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Track the distribution of your promotional materials.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Exert your dominance at retail.
                </div>
              </li>

              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2 mb-5 pr-[5px]">
                  Measure your brand’s visibility against your competitors.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Get images to confirm visibility and brand positioning.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                  <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                  Dashboard visualizations of your brand’s visibility versus
                  your competitors.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 py-20 2xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-[60%]">
              <div>
                <Image
                  src={Logo}
                  alt="/"
                  width={400}
                  height={50}
                  layout="intrinsic"
                />
              </div>
              <div className="relative before:absolute before:w-[2rem] before:h-[3px] content-none before:top-[36%] before:right-[16.3rem] before:bg-[#584E5D] ml-auto">
              <h3 className="mb-2 text-[30px] font-roboto text-[#584E5D] font-medium">
                  Outlet Enumeration
                </h3>
              </div>
            </div>
            <div className="relative w-full min-h-[300px]">
              <Image
                src={outletImg}
                alt="/"
                layout="responsive"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col leading-7 font-lato mb-4 text-base text-[#666666] md:ml-[100px]">
            <p className="mb-4">
              FieldMaxPro Outlet Enumeration, enables organizations that are
              coming into a market to have the details of all the retail points
              in the territory they are interested in selling their products to.
              As opposed to trying to build that database of customers over
              time, from day one, you can have a robust database of customers
              with all the information you require to remain in contact and
              engage those customers.
            </p>
            <span className=" font-lato text-[#444444] text-base underline mb-6">Some Key Features:</span>
            <ul className="text-[#6e7e8f] leading-6">
            <li className="flex flex-row">
                <div>
                <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                Create a robust, up-to-date database of all your points of
                interest.
                </div>
              </li>
              <li className="flex flex-row">
              <div>
                <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2 mb-5 pr-[5px]">
                Categorize outlets effectively to gain actionable insights.
                </div>
              </li>
              <li className="flex flex-row">
                <div>
                <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                Record engagements at outlets.
                </div>
              </li>
              <li className="flex flex-row">
              <div>
                <MdOutlineCheck className="h-7 w-7 text-[#444444]" />
                </div>
                <div className="pl-2  mb-5">
                Access to real time and historical engagement records of outlets
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default solutions;
{
  /* <SolutionsItem
  logoImg={Logo}
  variant="Retail"
  CardImage={retailImg}
  paragraph="If your organization relies on retail clients to help display and sell your products, and you also have field reps who engage those retailers to ensure they have products at all times and that your brand is visible at retail, then FieldMaxPro Retail is for you. FieldMaxPro Retail enables your reps to plan with historical knowledge of all engagements with each customer"
  keyfeature="Some Key Features:"
/>
<SolutionsItem
  logoImg={Logo}
  variant="Pharma"
  CardImage={pharmaImg}
  paragraph="FieldMaxPro Pharma was created to meet the needs of the pharmaceutical industry specifically. The pharmaceutical industry has unique needs when it comes to managing their customers like pharmacies, hospitals, and clinics. The intent is not always to sell. A lot of times, the intent is more about detailing these medical products to the medical community.FieldMaxPro Pharma was built to accommodate the requirements of this industry. All the basic features of force management tools are also present in FieldMaxPro Pharma."
  keyfeature="Some Key Features:"
/>
<SolutionsItem
  logoImg={Logo}
  variant="Survey"
  CardImage={surveyImg}
  paragraph="FieldMaxPro Survey gives organizations the ability to collate market insights on the go. It is flexible enough to accommodate different types of surveys, and the dashboard automatically synthesizes the information to present management with actionable insights from the survey."
  keyfeature="Some Key Features:"
/>
<SolutionsItem
  logoImg={Logo}
  variant="Brand Visibility"
  CardImage={brandImg}
  paragraph="FieldMaxPro Brand Visibility is Papyrus Digital Solution’s solution to enable organizations to empirically measure the impact of their investment in merchandising materials. This enables them to measure their share of visibility at retail compared to their competition, and this measurement can scale all the way from your visibility share in one store to your visibility share in a territory, region, or nationwide."
  keyfeature="Some Key Features:"
/>
<SolutionsItem
  logoImg={Logo}
  variant="Outlet Enumeration"
  CardImage={outletImg}
  paragraph="FieldMaxPro Outlet Enumeration, enables organizations that are coming into a market to have the details of all the retail points in the territory they are interested in selling their products to. As opposed to trying to build that database of customers over time, from day one, you can have a robust database of customers with all the information you require to remain in contact and engage those customers."
keyfeature="Some Key Features:" */
}
