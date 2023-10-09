import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_mod0y6s",
        "template_394r3mf",
        form.current,
        "umCEHtHGtnLt5BZYB"
      )
      .then(
        (result) => {
          console.log(result)
          if (result.text === "OK") {
            alert("Message successfully sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="mx-8 ">
      <h2 className="text-center font-semibold text-4xl  text-red-500">
        {" "}
        Get in touch
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div data-aos="zoom-in"
            data-aos-duration="2000">
          <img
            className="mx-auto"
            src="https://i.ibb.co/9rNYWC2/5579058-removebg-preview.png"
            alt=""
          />
        </div>
        <form 
            data-aos="zoom-in"
            data-aos-duration="2000"
            ref={form} onSubmit={handleForm} className="">
          <div className="flex items-center  w-full my-12">
            <div className="w-full justify-center mx-auto">
              <br />
              <input
                className="w-full lg:w-5/6 md:w-full rounded py-1 text-gray-600 px-3 mt-2"
                placeholder="Your Name"
                type="text"
                name="name"
                required
                id=""
              />
              <br />
              <br />
              <input
                className="w-full lg:w-5/6 md:w-full rounded py-1 text-gray-600 px-3 mt-2"
                placeholder="Your Email"
                type="email"
                name="email"
                required
                id=""
              />
              <br />
              <br />
              <input
                className="w-full lg:w-5/6 md:w-full rounded py-1 text-gray-600 px-3 mt-2"
                placeholder="Your Subject"
                type="text"
                name="subject"
                id=""
              />
              <br />
              <br />
              <textarea
                className="w-full lg:w-5/6 md:w-full  rounded py-1 px-3 mt-2 text-gray-600"
                placeholder="Message"
                name="message"
                required
                rows="6"
              ></textarea>
              <br />
              <input
                className="bg-purple-800 w-full lg:w-5/6 md:w-full px-4 py-2 rounded-lg cursor-pointer mt-4"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
