import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-white text-center sm:text-left sm:flex justify-around ">
          <div>
            <h2 className="text-xl sm:text-2xl">My Account</h2>
            <ul className="my-4 leading-8">
              <li>
                <a href="#">Creator Dashboard</a>
              </li>
              <li>
                <a href="#">Wallet</a>
              </li>
              <li>
                <a href="#">Create Item</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl">Web Links</h2>
            <ul className="my-4 leading-8">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Item Details</a>
              </li>
              <li>
                <a href="#">Rankings</a>
              </li>
              <li>
                <a href="#">User Profile</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl">Community</h2>
            <ul className="my-4 leading-8">
              <li>
                <a href="#">Blog Category</a>
              </li>
              <li>
                <a href="#">Blog Author</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Blog Details</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl">Contact</h2>
            <ul className="my-4 leading-8">
              <li>
                <a href="#">Dhaka,P.O. 1334 Road,Bangladesh </a>
              </li>
              <li>
                <a href="#">BD Author</a>
              </li>
              <li>
                <a href="#">author@gmail.com</a>
              </li>
              <li>
                <a href="#">Phone: 01777777777</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 text-white" />
        <div className='text-white flex justify-between my-8'>
          <p>
            &copy;Copyright-2026 Designed by{" "}
            <span className='text-green-700'>Programming Shikhbo Team's</span>
          </p>
          <p>Privacy Policy | Team of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer