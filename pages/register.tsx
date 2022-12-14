import { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar color={"bg-black"} />
      <form className={"  flex flex-col"}>
        <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 container max-w-sm mx-auto rounded-md items-center justify-center px-2 max-h-fit">
          <div className=" px-6 py-8  bg-text w-full">
            <h1 className="mb-8 text-3xl text-center text-black">Register</h1>
            <input
              type="text"
              className=" appearance-none border-black mb-4 py-2  bg-transparent   w-full  mr-3  px-2 leading-tight focus:border-b focus:outline-none"
              aria-label="Full name"
              name="username"
              placeholder="Username"
            />

            <input
              type="text"
              className=" appearance-none border-black mb-4 py-2  bg-transparent   w-full text-gray-700 mr-3  px-2 leading-tight focus:border-b focus:outline-none"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className=" appearance-none border-black mb-4 py-2  bg-transparent   w-full text-gray-700 mr-3  px-2 leading-tight focus:border-b focus:outline-none"
              name="password"
              placeholder="Password"
            />
            {/* <input
              type="password"
              className="block bg-slate-400 text-red-700 w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
            /> */}

            {/* <button
              type="submit"
              className="w-full bg-black text-text text-center py-3 rounded-lg focus:outline-none my-1"
            >
              Create Account
            </button> */}
          </div>
        </div>
        <div className="text-center p-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  ">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="../login"
          >
            Log in
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
