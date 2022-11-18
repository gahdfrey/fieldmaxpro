import Image from "next/image";
import Link from "next/link";
import React from "react";
import accountImg from "../public/assets/Account Receivable.PNG";
import brandImg from "../public/assets/brand.png";
import cameraImg from "../public/assets/camera.png";
import contactImg from "../public/assets/contact.png";
import contactsImg from "../public/assets/contacts.png";
import geolocationImg from "../public/assets/geolocation.png";
import inventoryImg from "../public/assets/inventory.png";
import medicalImg from "../public/assets/medical.png";
import notesImg from "../public/assets/notes.png";
import orderImg from "../public/assets/order.png";
import outletImg from "../public/assets/outlet.png";
import qrcodeImg from "../public/assets/qrcode.png";
import retailImg from "../public/assets/retail audit.png";
import schduelImg from "../public/assets/schdeuling.png";
import surveyImg from "../public/assets/survey.png";
import targetImg from "../public/assets/target.png";
import visitImg from "../public/assets/visit.png";
import briefImg from "../public/assets/briefs.png";
import FeaturesItem from "./FeaturesItem";


const Features = () => {
  return (
    <div id="projects" className="w-full bg-[#f9f9f9] py-[120px]">
      <div className="max-w-[1170px]  mx-auto px-2 py-16 text-center">
      <h1 className=" text-[40px] mb-5 font-bold leading-[70px] font-roboto text-[#171614]">Our Key Features</h1>
         <p className="text-xl text-[#666666] mb-[60px] font-lato">
         Here are a few of the key features that drive FieldMaxPro.These features would<br/>
help you get the best out of your fieldforce using data and technology.
           </p>
        <div className="grid md:grid-cols-4 gap-4 py-5">
          <FeaturesItem
            CardImage={outletImg}
            title="Outlet Management"
            paragraph="Our outlets management allows you to create, geocode and manage your outlets. With maps showing you exactly where your customers are"
          />
          <FeaturesItem
            CardImage={contactsImg}
            title="Contact Management"
            paragraph="This feature helps you to manage your contacts in each of your customer outlets. This ensures your rep has a record of each person to interact with."
          />
          <FeaturesItem
            CardImage={schduelImg}
            title="Scheduling"
            paragraph="Our outlets management allows you to create, geocode and manage your outlets. With maps showing you exactly where your customers are"
          />
          <FeaturesItem
            CardImage={geolocationImg}
            title="Geolocation"
            paragraph="Our geolocation features enable you to ensure your customers are actually being visited, it ensures your reps are honest about where they are."
          />
          <FeaturesItem
            CardImage={visitImg}
            title="Visit Management"
            paragraph="Manage field reps visits and schedules. View reporting on who your reps are visiting, what time and where. You can also use our automated scheduling."
          />
          <FeaturesItem
            CardImage={retailImg}
            title="Retail Audit"
            paragraph="This feature allows you to manage product availability, see your share on the shelf and measure your product facing at your retail levels"
          />
          <FeaturesItem
            CardImage={orderImg}
            title="Orders/Sales"
            paragraph="Place orders, finalise them into sales, perform pre-selling. This allows you to gather and report data about your reps sales activities."
          />
          <FeaturesItem
            CardImage={brandImg}
            title="Brand Visibility"
            paragraph="This helps you collect and report on the visibility of your brand in the market. It also allows you to manage the distribution of materials."
          />
          <FeaturesItem
            CardImage={surveyImg}
            title="Survey"
            paragraph="Our outlets management allows you to create, geocode and manage your outlets. With maps showing you exactly where your customers are"
          />
          <FeaturesItem
            CardImage={notesImg}
            title="Notes"
            paragraph="This feature ensures you can transfer learnings of your customers. The notes feature allows reps to store feedback about their customers."
          />
          <FeaturesItem
            CardImage={medicalImg}
            title="Medical Detailing"
            paragraph="Medical and pharmaceutical field reps make most of the medical detailing module as it is the most important feature. This covers end-to-end things required to detail in pharmaceuticals, Health Care Facilities, Clinics and hospitals"
          />
          <FeaturesItem
            CardImage={cameraImg}
            title="Capture Images"
            paragraph="They say a picture is worth more than a thousand words. Our image capture features allows your rep to give you image or video feedback of their visit activities"
          />
          <FeaturesItem
            CardImage={briefImg}
            title="Briefs"
            paragraph="Our communication features helps you to send communication and multimedia to your reps, be it documents, videos or audios"
          />
          <FeaturesItem
            CardImage={inventoryImg}
            title="Inventory"
            paragraph="This ensures that your reps can only report sales on products assigned to them. You can also manage distributor inventory."
          />
          <FeaturesItem
            CardImage={qrcodeImg}
            title="QR Code"
            paragraph="QR Codes functionality provide the capability to gather data for references and analysis, making it possible for businesses to measure its effectiveness, thereby helping them make informed business decisions."
          />
          <FeaturesItem
            CardImage={accountImg}
            title="Account Receivable"
            paragraph="This feature ensure you never forget money with your customers. It allows you to track and manage customers you allow credit purchases."
          />
          <FeaturesItem
            CardImage={targetImg}
            title="Target Management"
            paragraph="This features allows you to set and manage key KPIs for your reps. On the rep ends it allows them to see their targets and display reporting of achievements."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;