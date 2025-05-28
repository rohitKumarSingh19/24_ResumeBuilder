import React, { useState } from "react";
import image1 from "../assets/template-4.jpeg";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const handleCTA = () => {};
  return (
    <div className="w-full min-h-full bg-white pb-96">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">Resume Builder</div>
          <button
            className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:text-white transition-colors cursor-pointer"
            onClick={() => setOpenAuthModel(true)}
          >
            Login/Sign Up
          </button>
        </header>
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 md-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Build Your {""}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">Resume Effortlessly</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Craft a standout resume in minutes with our smart and intuitive
              resume builder.
            </p>
            <button className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer" onClick={handleCTA}>
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={image1}
            alt="Hero Image"
            className="w-full rounded-lg"/>
          </div>
        </div>
        <section className="">
            <h2 className="">
                Features That Make You Shine
            </h2>
        </section>
      </div>
    </div>
  );
};
export default LandingPage;
