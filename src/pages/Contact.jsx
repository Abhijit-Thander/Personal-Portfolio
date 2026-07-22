import React, { useRef, useState } from "react";
import bg from "../assets/skillBg.png";
import contactLeave from "../assets/contactLeave.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setIsSending(false);
          setTimeout(() => setStatus("idle"), 4000); // hide after 4 sec
        },
        (err) => {
          setStatus("error");
          console.log(err);
          setIsSending(false);
          setTimeout(() => setStatus("idle"), 4000); // hide after 4 se
        },
      );
  };

  return (
    <div
      id="contact"
      className="bg-[#0f0f0f] w-full sm:px-16 px-6 sm:pt-20 pt-10 sm:pb-10 min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-3 mb-20">
        <img src={contactLeave} alt="" />
        <h1 className="font-cinzel-decorative text-4xl text-[#DFDFDF]">
          Contact Me
        </h1>
        <h1 className="font-cinzel text-[#888787] text-md tracking-widest">
          feel free to reach out
        </h1>
      </div>

      <section className="text-white my-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleFormSubmit}
            ref={formRef}
            className="space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="font-cinzel-decorative text-md text-gray-500">
                  your name
                </label>
                <input
                  name="from_name"
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
                />
              </div>

              <div>
                <label className="font-cinzel-decorative text-md text-gray-500">
                  email address
                </label>
                <input
                  name="from_email"
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
                />
              </div>
            </div>

            <div>
              <label className="text-md font-cinzel-decorative text-gray-500">
                subject
              </label>
              <input
                required
                name="subject"
                type="text"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-1 focus:border-[#DCDCDC] transition"
              />
            </div>

            <div>
              <label className="font-cinzel-decorative text-md text-gray-500">
                your message
              </label>
              <textarea
                name="message"
                required
                rows="3"
                className="w-full bg-transparent border-b border-gray-700 outline-none resize-none py-1 focus:border-[#DCDCDC] transition"
              />
            </div>

            {status === "success" && (
              <p className="text-[#8cfc88] text-center transition-opacity duration-500">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-[#ff6b6b] text-center transition-opacity duration-500">
                Something went wrong, try again.
              </p>
            )}

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="font-cinzel-decorative cursor-pointer text-xl text-[#DCDCDC] px-16 py-4 border border-[#DCDCDC] tracking-[0.2em] hover:bg-[#DCDCDC] hover:text-black transition-all duration-300"
              >
                {isSending ? "Sending..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
