import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
export default function Catogory() {
  return (
    <>
    <Hero/>
      <section className="bg-gradient-to-b from-slate-200 to-gray-700 ... py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 className="text-center text-5xl pb-12 mb-6">NEWS CATOGORAY </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/health" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Medical"
                      title="Medical"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Health
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/science" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Glass.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Glass"
                      title="Glass"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Science
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/technology" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Mobile.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Consumer Electronics"
                      title="Consumer Electronics"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Technology
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/sport" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Sports.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Sports"
                      title="Sports"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Sports
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/entertainment" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Sports.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Sports"
                      title="Sports"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Entertainment
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <Link to="/business" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-stone-900 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Sports.png"
                      className="w-36 h-36  mt-6 m-auto"
                      alt="Sports"
                      title="Sports"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Business
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
