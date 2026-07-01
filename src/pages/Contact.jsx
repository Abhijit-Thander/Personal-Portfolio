import React from "react";
import bg from "../assets/skillBg.png";
import contactLeave from "../assets/contactLeave.svg";

const Contact = () => {
  return (
    <div
      className=" bg-[#0f0f0f] w-full px-16 pt-20 pb-10 min-h-screen bg-cover   "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={contactLeave} alt="" />
        <h1 className="font-cinzel-decorative  text-4xl text-[#DFDFDF]">
          Contact Me
        </h1>
        <h1 className="font-cinzel text-[#888787] text-md tracking-widest">
          feel free to reach out
        </h1>
      </div>

      <section className="text-white my-8">
        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className=" font-cinzel-decorative  text-md  text-gray-500">
                  your name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
                />
              </div>

              <div>
                <label className=" font-cinzel-decorative text-md  text-gray-500">
                  email address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
                />
              </div>
            </div>

            <div>
              <label className="text-md  font-cinzel-decorative text-gray-500">
                subject
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
              />
            </div>

            <div>
              <label className=" font-cinzel-decorative  text-md  text-gray-500">
                your message
              </label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b border-gray-700 outline-none resize-none py-1 focus:border-[#DCDCDC] transition"
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="font-cinzel-decorative cursor-pointer text-xl text-[#DCDCDC] px-16 py-4 border border-[#DCDCDC] tracking-[0.2em] hover:bg-[#DCDCDC] hover:text-black transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
