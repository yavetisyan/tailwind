import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="md:text-4xl sm:text-3xl t  ext-2xl font-bold py-2">
            Want tip & tricks to optimize your flow?
          </h2>
          <p>Sing up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row  items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 py-3 px-6 text-black">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
