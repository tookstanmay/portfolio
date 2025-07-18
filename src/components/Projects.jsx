import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className="mt-4 md:mt-10 text-3xl md:text-4xl text-center font-extrabold">My projects</h1>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.title}/>
            ))}
        </div>
    );
};

export default Projects;