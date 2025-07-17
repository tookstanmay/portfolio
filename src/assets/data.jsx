import React from "react";
import { FaPalette } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiReact } from "react-icons/si";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
    name: "Tanmay S",
    title: "Full Stack Developer/Designer",
    social: {
        github: "https://github.com/tookstanmay",
        linkedin: "https://www.linkedin.com/in/tookstanmay/",
        twitter: "https://x.com/tookstanmay/",
        email: "tookstanmay@gmail.com",
        resume: "https://drive.google.com/file/d/1jCVb2Zxk42qz5neYscqPRkg83-xSZZym/view?usp=drive_link"
    },
    about: {
        title: "My Background",
        description:
            "Recent Software Engineering graduate with fundamental knowledge of software design, development and testing. Seeking to utilize broad educational background with excellent analytical, technical and programmatical skills to thrive as an entry-level software engineer.",
    },
    coding: {
        gfg: "https://auth.geeksforgeeks.org/user/tookstanmay/practice",
        leetcode: "https://leetcode.com/u/tookstanmay/",
        codechef: "https://www.codechef.com/users/tookstanmay/",
        codeforces: "https://codeforces.com/profile/tookstanmay/"
    },
    skills: [
        {
            skillName: "Full Stack",
            skillIcon: <MdOutlineDeveloperMode className={BOOTSTRAP_FOR_SKILL_ICON} color="#0284c7" />,
        },
        {
            skillName: "Design / UX",
            skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} color="#db2777" />,
        },
        {
            skillName: "React JS",
            skillIcon: <SiReact className={BOOTSTRAP_FOR_SKILL_ICON} color="#0d9488" />,
        },
    ],
    projects: [
        {
            title: "budgetbook",
            description: "👨‍🎨 An Expense Management Application.",
            tags: [
                "react js",
                "postgreSQL",
                "firebase",
                "jspdf"
            ],
            link: "https://github.com/tookstanmay/projectLabII/"
        },
        {
            title: "inkwell",
            description: "Responsive note-taking Web Application.",
            tags: [
                "react js",
                "mongoDB",
                "tailwindcss",
                "jsonwebtoken"
            ],
            link: "https://github.com/tookstanmay/inkwell/"
        }
    ]
};
export default data;
