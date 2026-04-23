import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#2d2b33] shadow-xl sticky top-0 z-10">
      <div className="container">
        <div className="sm:flex justify-between py-6 items-center">
          <div className='text-center mb-3 sm:mb-0'>
            <a
              href="#"
              className="text-white text-xl sm:text-3xl font-bold font-poppins"
            >
              <span className="text-[#F65023]">S</span>mart Cod
              <span className="text-[#F65023]">ers</span>
            </a>
          </div>
          <ul className="sm:flex text-white font-poppins text-xl gap-8 text-center border-t sm:border-none">
            <li className='mt-4 sm:mt-0'>
              <a href="#" className="text-[#F65023]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F65023]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F65023]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F65023]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F65023]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar