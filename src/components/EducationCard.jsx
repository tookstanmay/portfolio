import React from "react";

const EducationCard = ({ education }) => {

  return (
    <div className="mt-4 flex align-center justify-center">
        <div class="p-6 md:p-8 rounded-2xl border-2 border-gray-300 bg-gray-100">
        <div className="flex align-center justify-between">
            <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900">
                <a href="https://sgsits.ac.in/" className="hover:text-blue-700">
                {education.name}, {education.city}
                </a>
            </h5>
        </div>
        <div>
            <div>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-900 italic">{education.degree}, <span className="text-slate-950">{education.timing}</span></p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default EducationCard;
