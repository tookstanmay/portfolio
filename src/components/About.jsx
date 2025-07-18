import React from "react";

function About({ title, description }) {
  return (
    <div className="max-w-4xl mx-auto mt-8 md:mt-16 px-2 md:px-0">
      <p className="text-3xl md:text-4xl font-bold text-center ">{title}</p>
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4 italic">
        {description}
      </p>
    </div>
  );
}

export default About;
