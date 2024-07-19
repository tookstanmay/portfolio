import React from "react";
import EducationCard from "./EducationCard";

const Education = ({ education }) => {
    const title = education.title;

    return (
        <div className="max-w-4xl mx-auto md:mt-10">
        <p className="text-2xl md:text-4xl font-bold text-left md:text-center">{title}</p>
        <EducationCard education={education} />
      </div>
    );
}

export default Education;