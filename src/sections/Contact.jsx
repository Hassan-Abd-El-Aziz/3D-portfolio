import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "./ContactExperience";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub=" ✉ Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* contact form left side */}
          <div className="xl:col-span-5 ">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* 3D Experience right side */}
          <div className="xl:col-span-7 min-h-96 ">
            <div className="w-full h-full  bg-gradient-to-l from-[#76c4f8] to-[#46c1f1] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
        {/* 
        <p className="text-center">
          Feel free to reach out for collaborations, questions, or just to say
          hello!
        </p>
        <p className="text-center mt-4">Email: hassanabdelaziz940@gmail.com</p> */}
      </div>
    </section>
  );
};

export default Contact;
