import React from "react";
import { useNavigate } from "react-router-dom";
import CustomParticle from "../components/CustomParticle";
import { api } from "../utils/api";
import { FiMail, FiUser } from "react-icons/fi";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const forgetPasswordHandler = async (e) => {
    try {
      e.preventDefault();
      let name = e.target[0].value;
      let email = e.target[1].value;

      let data = {
        name,
        email
      };

      const response = await api("get-forget-password", "PUT", data);
      if (response.success) {
        toast.success(response.message);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-blue-950 w-full text-center">
      <CustomParticle />
      <div className=" w-full my-24 flex justify-center">
        <form
          onSubmit={forgetPasswordHandler}
          className="z-10 bg-white shadow-xl flex flex-col  rounded-xl gap-6 px-3 lg:px-20 py-12"
        >
          <h2 className="text-gray-700 text-4xl font-medium my-4">
            {"Forget Password"}
          </h2>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <FiUser className="absolute left-1  w-7 h-7 ml-2 p-1 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                placeholder="User Name *"
                required
              />
            </div>
            <div className="flex relative items-center ">
              <FiMail className="absolute left-1  w-7 h-7 ml-2 p-1 text-gray-500" />
              <input
                className="pl-12 w-full lg:w-96 h-12 rounded border bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
                type="text"
                placeholder="Email Address*"
                required
              />
            </div>
            <div>
              <button className=" rounded-md py-2 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-blue-400 text-black hover:scale-105 duration-[700ms] w-64">
                <span className="absolute transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-blue-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease w-full"></span>
                <span className="relative text-blue-400 transition duration-[700ms] group-hover:text-white ease w-full">
                  Submit
                </span>
              </button>

              <p className="text-[1rem] font-normal  text-center mt-[6px]">
                Remember Password ?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer underline text-blue-700"
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
