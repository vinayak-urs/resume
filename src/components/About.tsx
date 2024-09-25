import React from "react";

const About = () => {
  return (
    <div
      className="w-full h-dvh bg-[#1f2028] text-white"
    >
      <div className=" max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-b-gray-500 ">
            About
          </p>
        </div>
        <p
          className="text-lg
         mt-2 text-gray-300"
        >
          I'm a passionate front-end engineer with a strong foundation in data structures, algorithms, and software engineering. I've honed my skills through academic projects and professional experiences, delivering high-quality web applications that prioritize user experience and performance.
        </p>

        <br />
        <p className="text-lg text-gray-300">
          My recent work at Paytm has involved optimizing web pages, integrating with external systems, and building self-service tools. I'm proficient in React, Angular, Redux, Tailwind CSS, and other modern front-end technologies.
        </p>        
        <br />
        <p className="text-lg text-gray-300">
          I'm always eager to learn new things and contribute to innovative projects. Let's connect and explore how we can collaborate to build amazing web experiences together.
        </p>
      </div>
    </div>
  );
};

export default About;