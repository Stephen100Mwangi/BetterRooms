/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BasicInfo from "./userRegistation/BasicInfo";
import FaceScan from "./userRegistation/FaceScan";
import ConfirmRegister from "./userRegistation/ConfirmRegister";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  

  const titles = ["Register Here", "Scan Face", "Confirm Registration"];

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    confirmRegister: false,
    faceScanSuccess: false,
  });

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <FaceScan formData={formData} setFormData={setFormData} />;
      case 2:
        return <ConfirmRegister formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const handleRegister = async () => {
    const toastId = toast.loading("Loading. Please wait");
    const { username, name, email, password, confirm_password, confirmRegister, faceScanSuccess } = formData;

    if (!username || !name || !email || !password || !confirm_password) {
      return toast.error("All fields are required");
    }
    if (password !== confirm_password) {
      return toast.error("Passwords do not match");
    }
    if (!faceScanSuccess) {
      return toast.error("Face capture was not successful");
    }
    if (!confirmRegister) {
      return toast.error("Please confirm the registration");
    }

    try {
      setLoading(true);
      

      const userResponse = await axios.post("http://localhost:6650/createUser", {
        username, name, email, password, confirm_password, confirmRegister, faceScanSuccess
      });

      console.log("User response from server:", userResponse);
      
      if (userResponse.data.message === "Password is too short") {
        toast.error("Password is too short");
      } else if (userResponse.data.message === "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character.") {
        toast.error("Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character.");
      } else if (userResponse.data.message === "Invalid email") {
        toast.error("Please type a valid email");
      } else if (userResponse.data.message === "User already exists") {
        toast.error("User account already exists. Check your email or username");
      } else if (userResponse.data.message === "User registered successfully") {
        toast.success("User registered successfully to MongooseDB");

        // Save face encodings
        try {
          const payload = { username, name, email, password };
          const faceScanResponse = await axios.post("http://127.0.0.1:5005/register", payload);

          console.log("Face scan response from server:", faceScanResponse);
          
          if (faceScanResponse.data.message === "User registered successfully" || faceScanResponse.data.request.status === 201) {
            toast.success("Face scan successful");
            setLoading(false);
            toast.dismiss(toastId);
            setTimeout(() => {
              navigate("/login");
              toast.success("Hurray 😀 You can now login")
            }, 2000);
          } else {
            toast.error(faceScanResponse.data.message);
            toast.dismiss(toastId)
          }
        } catch (error) {
          toast.error("User face registration failed. Please try again.");
          console.error("Error scanning user:", error);
          toast.dismiss(toastId)
        }
      }
    } catch (error) {
      toast.error("Error with MongoDB");
      console.error("Error with MongoDB:", error);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] pb-20 flex flex-col justify-center items-center bg-background relative max-sm:overflow-hidden">
      <div className="w-[120px] items-start justify-start p-0 bg-white rounded-full fixed top-28 max-md:invisible">
        <div
          className="progressbar rounded-full h-1 bg-hero"
          style={{ width: `${(page + 1) * 40}px` }}
        ></div>
      </div>
      <Toaster />
      {loading && (<p>Loading... Please wait</p>)}
      <div className="formContainer flex flex-col space-y-5">
        <div className="body">{pageDisplay()}</div>
        <div className="flex space-x-5 justify-center">
          <button
            onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 0))}
            disabled={page === 0}
            className="bg-hero rounded-sm hover:rounded-full text-white shadow-2xl px-8 p-3 items-center flex justify-center"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (page === titles.length - 1) {
                handleRegister();
              } else {
                setPage((currentPage) => Math.min(currentPage + 1, titles.length - 1));
              }
            }}
            className="bg-hero rounded-sm hover:rounded-full text-white shadow-2xl p-3 px-8 items-center flex justify-center"
          >
            {page === titles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;


