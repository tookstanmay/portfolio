import React from "react";
import profile from "../images/memoji_old_one.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";

function Card({ name, title, social: { github, linkedin, twitter, email, resume } }) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-sky-600 hover:bg-sky-600 rounded-full hover:text-white transition-colors duration-300"
              href={linkedin}
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-slate-800 hover:bg-slate-800 rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaSquareXTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-rose-500 hover:bg-rose-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300"
              href="https://drive.google.com/file/d/1jCVb2Zxk42qz5neYscqPRkg83-xSZZym/view?usp=drive_link"
            >
              <SiGoogledocs />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
