import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="card bg-[#2563EB] w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center font-semibold text-[25px] pt-4 text-white">
        Please Register
      </h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input bg-white text-black dark:bg-gray-700 dark:text-white"
            placeholder="Name"
          />
          <label className="label">Photo URL</label>
          <input
            required
            name="PhotoURL"
            type="text"
            className="input bg-white text-black dark:bg-gray-700 dark:text-white"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            required
            name="email"
            type="email"
            className="input bg-white text-black dark:bg-gray-700 dark:text-white"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input bg-white text-black dark:bg-gray-700 dark:text-white"
              placeholder="Password"
            />
            <button
              onClick={handleTogglePasswordShow}
              className="btn btn-xs top-2 right-5 absolute"
            >
              {showPassword ? <Eye></Eye> : <EyeOff></EyeOff>}
            </button>
          </div>
          <div></div>
          <button
            type="submit"
            className="btn bg-white hover:bg-[#ffffffb0] text-[#2563EB] mt-4"
          >
            Register
          </button>
          <p className="text-[15px] text-center mt-2 font-medium">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-white">
              Login
            </Link>
          </p>

          <p className="text-center font-medium text-[15px]">Or</p>

          {/* Google Sign-In */}
          <button
            type="button"
            className="btn border border-blue-200 bg-white hover:bg-gray-200 text-black"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
