import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Modal = ({ isVisible, onClose }) => {
  const [state, handleSubmit] = useForm("mknypllj");
  if (state.succeeded) {
    return (
      <p className="py-[120px] text-center font-medium text-lg text-[#ff6047]">
        Thanks for joining!
      </p>
    );
  }

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
          <h5 className="text-2xl font-roboto font-medium p-4 leading-6">
            Get In Touch
          </h5>
          <div>
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 p-4 border-t-[1px] border-b-[1px] border-gray-200 gap-8"
          >
            <input
              id="name"
              type="text"
              name="name"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="First Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="name"
              type="text"
              name="name"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="Last Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="Company Name"
              type="text"
              name="Company Name"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="Company Name"
            />
            <ValidationError prefix="Company Name" field="Company Name" errors={state.errors} />
            <select
              id="select"
              type="select"
              name="select"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="Company Name"
            >
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
            <select
              id="Variant"
              type="select"
              name="Variant"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="Variant"
            >
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
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="Job Title"
              type="text"
              name="Job Title"
              className=" p-3 bg-[#f9f9f9]"
              placeholder="Job Title"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="phone"
              type="text"
              name="phone"
              className=" bg-[#f9f9f9] shadow-lg p-3"
              placeholder="Phone"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <input
              id="Number of Users"
              type="text"
              name="Number of Users"
              className=" bg-[#f9f9f9] shadow-lg p-3"
              placeholder="Number of Users"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <div className="p-[12px] flex flex-row gap-2">
              <button
                className="text-[16px]  text-white cursor-pointer leading-[54px] bg-gray-400 hover:bg-[#ff6047] px-[35px] rounded-md"
                onClick={() => onClose()}
              >
                Close
              </button>
              <button
                type="submit"
                className="text-[16px] leading-[54px]   text-white cursor-pointer bg-[#ff6047] px-[35px] rounded-md"
                disabled={state.submitting}
              >
                Submit
              </button>
              {/* <button className="text-[16px] leading-[54px]   text-white cursor-pointer bg-[#ff6047] px-[35px] rounded-md">
              Submit
            </button> */}
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
