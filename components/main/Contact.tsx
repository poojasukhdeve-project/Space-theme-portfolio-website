import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-4xl px-4 my-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Us
      </h1>

      <div className="flex flex-wrap justify-between">
        {/* Form Container */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="font-bold text-xl mb-4">Contact Us</h1>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                autoComplete="off"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                autoComplete="off"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="/contactus.png"
            alt="Contact Us"
            width={500}
            height={400}
            className="max-w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
