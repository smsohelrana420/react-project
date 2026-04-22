import React from 'react'
import FrontEnd from "../assets/frontEnd(2).png"
import BackEnd from "../assets/backEnd(1) (1).png"
import JavaScript from "../assets/javascript(1) (1).png"

const Service = () => {
  return (
    <section className="sm:py-20 py-4">
      <div className="container">
        <h2 className="text-white text-xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-900 p-8 rounded-xl border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={FrontEnd} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              Frontend Developer
            </h4>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl  border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={BackEnd} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              Backend Developer
            </h4>
            <p className="text-white  text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl  border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={JavaScript} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              JavaScript Developer
            </h4>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl  border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={FrontEnd} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              React.JS Developer
            </h4>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl  border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={FrontEnd} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              Node.JS Developer
            </h4>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl  border-4 hover:border-indigo-700 border-[#101828] cursor-pointer">
            <img className="w-1/2 mx-auto" src={FrontEnd} alt="" />
            <h4 className="text-white text-center text-lg underline underline-offset-8 my-5">
              Express.JS Developer
            </h4>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
              enim eveniet dicta saepe dolorum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service