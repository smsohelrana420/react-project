import React from 'react'

const Card = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 md:gap-20 py-12 bg-slate-900">
          <div className="text-white border p-10">
            <h5>Basic Plane</h5>
            <h2>
              ${" "}
              <span className="text-xl sm:text-2xl md:text-5xl font-bold">
                19.00
              </span>
              /month
            </h2>
            <hr className="text-white my-10" />

            <ul className="list-disc list-inside leading-10 text-xl">
              <li>5000 User Activities</li>
              <li>Unlimited Access</li>
              <li>No Hidden Charge</li>
              <li>03 Time Updates</li>
              <li>Figma Source File</li>
              <li>Many More Facilities</li>
            </ul>
            <button className="bg-green-800 hover:bg-green-600 transition cursor-pointer mt-8 block ml-auto px-5 py-2 text-xl">
              Purchase
            </button>
          </div>
          <div className="text-white border p-10">
            <h5>Basic Plane</h5>
            <h2>
              ${" "}
              <span className="text-xl sm:text-2xl md:text-5xl font-bold">
                19.00
              </span>
              /month
            </h2>
            <hr className="text-white my-10" />

            <ul className="list-disc list-inside leading-10 text-xl">
              <li>5000 User Activities</li>
              <li>Unlimited Access</li>
              <li>No Hidden Charge</li>
              <li>03 Time Updates</li>
              <li>Figma Source File</li>
              <li>Many More Facilities</li>
            </ul>
            <button className="bg-green-800 hover:bg-green-600 transition cursor-pointer px-5 py-2 text-xl mt-8 block ml-auto">
              Purchase
            </button>
          </div>
          <div className="text-white border p-10">
            <h5>Basic Plane</h5>
            <h2>
              ${" "}
              <span className="text-xl sm:text-2xl md:text-5xl font-bold">
                19.00
              </span>
              /month
            </h2>
            <hr className="text-white my-10" />

            <ul className="list-disc list-inside leading-10 text-xl">
              <li>5000 User Activities</li>
              <li>Unlimited Access</li>
              <li>No Hidden Charge</li>
              <li>03 Time Updates</li>
              <li>Figma Source File</li>
              <li>Many More Facilities</li>
            </ul>
            <button className="bg-green-800 hover:bg-green-600 transition cursor-pointer px-5 py-2 text-xl mt-8 block ml-auto">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card