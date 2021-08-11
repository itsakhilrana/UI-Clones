import React from 'react'

import NetflixImg from '../../Images/netflix.jpg'

const Netflix = () => {
  return (
    <div className="Netflix p-8 relative">
      {/* Navbar */}
      <div className="navbar flex relative z-20">
        <div className="logo mr-auto font-bold text-3xl text-red-500">
          Netflix
        </div>
        <div className="links">
          <a>English</a>
          <a>Sign Up</a>
        </div>
      </div>

      {/* Cover Img */}
      <div className="coverImg absolute top-0 right-0 left-0">
        <img src={NetflixImg} className="object-cover" />
        <div className="imgGradient absolute inset-0"></div>
      </div>

      {/* Hero Lines */}

      <div className="relative text-white text-center w-2/3 my-0 mx-auto py-40 z-10">
        <p className="font-extrabold text-5xl">
          Unlimited movies, TV shows and more.
        </p>
        <p className="font-semibold text-3xl">
          Watch anywhere. Cancel anytime.
        </p>

        {/* Input */}
        <div className="mt-16">
          <p className="font-normal text-2xl mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="inline-block ">
            <div className="flex  space-x-2">
              <input
                className="focus:outline-none w-96 h-16 text-black px-4"
                placeholder="Email"
                type="email"
              ></input>
              <button className=" bg-red-600 h-16 px-4 text-3xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------- */}
    </div>
  )
}

export default Netflix
