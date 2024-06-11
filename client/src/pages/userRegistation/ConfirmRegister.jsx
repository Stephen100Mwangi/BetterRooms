/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaFaceGrinBeam } from "react-icons/fa6";
import { useState } from "react";
import PropTypes from "prop-types";

const ConfirmRegister = ({ formData, setFormData }) => {
  // const [confirmRegistation, setConfirm] = useState();
  return (
    <div className="bg-background h-fit pt-5 flex justify-center">
      <form className="w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center items-center py-[32px] px-[10px] max-sm:w-[300px]">
        <p className="text-hero">You are just one step from registering </p>
        <div className="rounded-lg w-56">
          <img
            src="./public/assets/step.png"
            alt=""
            className="rounded-lg w-56"
          />
        </div>
        <p className="text-black font-light">
          I confirm that I am ready to create an account with Better Rooms
        </p>
        <input type="checkbox" value={formData.confirmRegister} onChange={()=>{setFormData({...formData,confirmRegister: true})}}/>
      </form>
    </div>
  );
};

ConfirmRegister.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      confirmRegistation: PropTypes.bool,
    })
  ),
  setFormData: PropTypes.any,
};

export default ConfirmRegister;
