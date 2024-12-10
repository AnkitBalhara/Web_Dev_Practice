import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

const Home = () => {
  const { name } = useContext(Context);
  return (
    <>
      <div className=" min-h-screen  flex flex-col items-center justify-center ">
        <main className="flex flex-col items-center p-6">
          <div className="bg-slate-200 rounded-lg shadow-md p-6 max-w-md w-full text-center">
            <h2 className="text-2xl font-semibold text-gray-600  mb-3">
              { name || "Hi, User!!!"}
            </h2>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to the BMI Calculator{" "}
            </h2>
            <p className="text-gray-600 mb-6">
              Calculate your Body Mass Index (BMI) and track your health easily.
              Start by clicking the button below.
            </p>
            <Link
              to="/bmi"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
