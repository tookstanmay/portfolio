import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className="scale-75 lg:scale-100 flex flex-row sm:flex-row align-center justify-center md:max-w-2xl md:mx-auto md:mt-8">
      {skills.map((skill) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} key={skill.skillName} />
        );
      })}
    </div>
  );
}

export default Skills;
