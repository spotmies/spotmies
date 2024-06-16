"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Fade } from "react-reveal";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "Our company offers a range of IT services, including software development, web design and development, mobile app development, cloud computing, and IT consulting.",
  },
  {
    id: 2,
    question: "How can I request a quote for your services?",
    answer:
      "You can request a quote for our services by filling out our online contact form or by giving us a call. We'll get back to you as soon as possible with a quote based on your specific needs.",
  },
  {
    id: 3,
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with clients in a range of industries, including healthcare, finance, education, and e-commerce. However, we are always open to working with new clients in any industry.",
  },
  {
    id: 4,
    question: "What is your approach to project management?",
    answer:
      "We use an agile project management approach, which allows us to be flexible and adapt to changing client needs throughout the development process. Our project managers work closely with clients to ensure that projects are completed on time and within budget.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance for your projects?",
    answer:
      "Yes, we offer ongoing support and maintenance for all of our projects. We understand that technology is constantly evolving, and we want to make sure that our clients' projects continue to function properly and meet their needs over time.",
  },
  {
    id: 6,
    question: "What is your process for ensuring the security of client data?",
    answer:
      "We take the security of our clients' data very seriously. We use industry-standard security protocols and take measures to ensure that all client data is stored and transmitted securely.",
  },
  {
    id: 7,
    question: "Can you work with clients outside of your geographic region?",
    answer:
      "Yes, we can work with clients anywhere in the world. We use video conferencing and other collaboration tools to communicate with clients remotely and ensure that projects are completed on time and within budget.",
  },
  {
    id: 8,
    question: "What is your pricing structure?",
    answer:
      "Our pricing structure varies depending on the specific project and client needs. We offer competitive pricing and work with clients to ensure that projects are completed within their budgetary constraints.",
  },
  {
    id: 9,
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for a project can vary depending on the complexity of the project and client needs. We work closely with clients to establish project timelines and ensure that projects are completed on time and within budget.",
  },
];

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

function Faq() {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const toggleQuestion = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="w-[100vw] bg-white" id="faq">
      <div className="w-[90%] container mx-auto py-12 rounded-sm m-auto ">
        <Fade bottom>
          <h2 className="text-3xl md:text-5xl lg:text-6xl gil-bold mb-8 text-center text-primary2">
            Frequently Asked Questions
          </h2>
        </Fade>

        <div className="flex flex-col md:flex-row justify-between lg:justify-around w-full items-start m-auto h-full ">
          <div className="max-w-xl lg:max-w-2xl pt-4 md:pt-0">
            {faqs.slice(0, 4).map((faq, key) => (
              <div
                key={key}
                className="bg-white border border-slate-300 rounded-xl overflow-hidden mb-4"
                onMouseOver={() => handleMouseOver(faq.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Fade bottom>
                  <button
                    className="w-full p-4 flex flex-row items-center justify-between text-left font-semibold lg:text-xl text-primary2"
                  >
                    {faq.question}
                    {selectedId === faq.id || hoveredId === faq.id ? (
                      <AiOutlineMinus className="text-3xl" />
                    ) : (
                      <AiOutlinePlus className="text-3xl" />
                    )}
                  </button>

                  <motion.div
                    variants={variants}
                    animate={selectedId === faq.id || hoveredId === faq.id ? "open" : "closed"}
                    className="px-4"
                  >
                    <p className="text-gray-600 pb-4">{faq.answer}</p>
                  </motion.div>
                </Fade>
              </div>
            ))}
          </div>

          <div className="max-w-xl lg:max-w-2xl pt-4 md:pt-0">
            {faqs.slice(5, 9).map((faq, key) => (
              <div
                key={key}
                className="bg-white border border-slate-300 rounded-xl overflow-hidden mb-4"
                onMouseOver={() => handleMouseOver(faq.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Fade bottom>
                  <button 
                    className="w-full p-4 flex flex-row items-center justify-between text-left lg:text-xl font-semibold text-primary2"
                  >
                    {faq.question}
                    {selectedId === faq.id || hoveredId === faq.id ? (
                      <AiOutlineMinus className="text-3xl" />
                    ) : (
                      <AiOutlinePlus className="text-3xl" />
                    )}
                  </button>

                  <motion.div
                    variants={variants}
                    animate={selectedId === faq.id || hoveredId === faq.id ? "open" : "closed"}
                    className="px-4"
                  >
                    <p className="text-gray-600 pb-4">{faq.answer}</p>
                  </motion.div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
