/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import BasicInfo from "./userRegistation/BasicInfo";
import FaceScan from "./userRegistation/FaceScan";
import ConfirmRegister from "./userRegistation/ConfirmRegister";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const titles = ["Register Here", "Scan Face", "Confirm Registration"];

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    confirmRegistation: false,
    faceScanSuccess: false,
  });

  const pageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <FaceScan formData={formData} setFormData={setFormData} />;
    } else {
      return <ConfirmRegister formData={formData} setFormData={setFormData} />;
    }
  };

  // Register user
  const handleRegister = async () => {
    const username = formData.username;
    const email = formData.email;
    const password = formData.confirmRegistation;
    const confirm_password = formData.confirm_password;
    const confirmRegistation = formData.confirmRegistation;
    const faceScanSuccess = formData.faceScanSuccess;

    if (!username) {
      return toast.error("Username cannot be empty");
    }
    if (!email) {
      return toast.error("Email cannot be empty");
    }
    if (!password) {
      return toast.error("Password cannot be empty");
    }
    if (!confirm_password) {
      return toast.error("Confirmation password cannot be empty");
    }
    if (password !== confirm_password) {
      return toast.error("Confirmation password must match password");
    }
    if (!faceScanSuccess) {
      return toast.error("Face capture was not successful");
    }
    if (!confirmRegistation) {
      return toast.error(
        "Please confirm that you want to create an account with us"
      );
    }

    try {
      const response = await axios.post("http://localhost:6650/createUser", {
        username,
        email,
        password,
        confirm_password,
        confirmRegistation,
        faceScanSuccess,
      });

      if (response.data.message === "Password is too short") {
        toast.error("Password is too short");
      }
      if (
        response.data.message ===
        "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character."
      ) {
        toast.error(
          "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character."
        );
      }
      if (response.data.message === "Invalid email") {
        toast.error("Please type a valid email");
      }

      if (response.data.message === "User registered successfully") {
        toast.success("User registered successfully");
        return navigate("/login");
      }
    } catch (error) {
      console.log("Error creating user");
      return toast.error("OOps! User registration failed.Please try again");
    }
  };
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-background relative max-sm:overflow-hidden">
      <div className="w-[120px] items-start justify-start p-0 bg-white rounded-full fixed top-28 max-md:invisible">
        <div
          className="progressbar rounded-full h-1 bg-hero"
          style={{ width: page === 0 ? "40px" : page === 1 ? "80px" : "120px" }}
        ></div>
      </div>
      <Toaster />

      <div className="formContainer flex flex-col space-y-5">
        <div className="body">{pageDisplay()}</div>
        <div className="flex space-x-5 justify-center">
          <button
            onClick={() => setPage((currentPage) => currentPage - 1)}
            disabled={page == 0}
            className="bg-hero rounded-md text-white shadow-2xl p-3 items-center flex justify-center px-6"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (page === titles.length - 1) {
                handleRegister;
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
            className="bg-hero rounded-md text-white shadow-2xl p-3 items-center flex justify-center px-6"
          >
            {page === titles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
