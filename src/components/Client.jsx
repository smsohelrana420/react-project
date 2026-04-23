import React from 'react'
import client1 from '../assets/client-01.png'
import client2 from '../assets/client-02.png'
import client3 from '../assets/client-03.png'
import client4 from '../assets/client-04.png'
import client5 from '../assets/client-05.png'
import client6 from '../assets/client-06.png'
import client7 from '../assets/client-07.png'
import client8 from '../assets/client-08.png'
import client9 from '../assets/client-09.png'

const Client = () => {
  return (
    <section className="mb-28 ">
      <div className=" container bg-slate-900 py-16  md:py-48">
        <div className="md:flex md:gap-x-40 justify-center items-center">
          <div className="text-white text-center  text-xl sm:text-lg  md:text-4xl ">
            <h2 className="text-yellow-500 mb-10 animate-bounce">
              My Clients{" "}
            </h2>
            <p>
              My Take Care of <br /> more{" "}
              <span className="underline decoration-orange-500 underline-offset-4">
                than 500k
              </span>{" "}
              <br /> Customers
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-12 text-white grid place-content-center text-center mt-4 sm:mt-0  ml-20">
            <div>
              <img src={client1} alt="" />
              <h3 className="mt-2">One Pluse</h3>
            </div>
            <div>
              <img src={client2} alt="" />
              <h3 className="mt-2">Tencent</h3>
            </div>
            <div>
              <img src={client3} alt="" />
              <h3 className="mt-2">Apple</h3>
            </div>
            <div>
              <img src={client4} alt="" />
              <h3 className="mt-2">Microsoft</h3>
            </div>
            <div>
              <img src={client5} alt="" />
              <h3 className="mt-2">Levono</h3>
            </div>
            <div>
              <img src={client6} alt="" />
              <h3 className="mt-2">Huawei</h3>
            </div>
            <div>
              <img src={client7} alt="" />
              <h3 className="mt-2">Nexus</h3>
            </div>
            <div>
              <img src={client8} alt="" />
              <h3 className="mt-2">Tesla</h3>
            </div>
            <div>
              <img src={client9} alt="" />
              <h3 className="mt-2">Brave</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client