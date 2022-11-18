import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    // backdrop-blur-sm 
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[800px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white rounded grid grid-col">
          <h5 className="text-2xl font-roboto font-medium p-4 leading-6">Get In Touch</h5>
          <form className="grid sm:grid-cols-2 p-4 border-t-[1px] border-b-[1px] border-gray-200 gap-8">
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="text"
              placeholder="First Name"
            />
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="text"
              placeholder="Last Name"
            />
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="text"
              placeholder="Company Name"
            />
            <select name="Industry" className=" p-3 bg-[#f9f9f9]">
              <option value="Select Industry">Select Industry</option>
              <option value="Food">Food</option>
              <option value="Logistics and Trading">
                Logistics and Trading
              </option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Other FMCG ">Other FMCG</option>
            </select>
            <select name="Variant" className=" p-3 bg-[#f9f9f9]">
              <option value="Select Industry">Select Variant</option>
              <option value="FieldMaxPro Retail">FieldMaxPro Retail</option>
              <option value="FieldMaxPro Pharma">FieldMaxPro Pharma</option>
              <option value="FieldMaxPro Survey">FieldMaxPro Survey</option>
              <option value="FieldMaxPro Brand Visibility">
                FieldMaxPro Brand Visibility
              </option>
              <option value="FieldMaxPro Outlet Enumeration">
                FieldMaxPro Outlet Enumeration
              </option>
            </select>
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="text"
              placeholder="Job Title"
            />
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="phone"
              placeholder="Phone Number"
            />
            <input className="p-3 bg-[#f9f9f9]" type="email" placeholder="Email" />
            <input
              className=" p-3 bg-[#f9f9f9]"
              type="number"
              placeholder="Number of Users"
            />
          </form>
          <div className="place-self-end p-[12px] flex flex-row gap-2">
            <button className="text-[16px]  text-white cursor-pointer leading-[54px] bg-gray-400 hover:bg-[#ff6047] px-[35px] rounded-md" onClick={() => onClose()}>
              Close
            </button>
            <button className="text-[16px] leading-[54px]   text-white cursor-pointer bg-[#ff6047] px-[35px] rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;