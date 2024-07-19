import React from "react";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Coding = ({links}) => {
    return (
        <div className="relative mt-8 md:mt-4 mx-auto w-48 md:w-auto md:fixed flex align-center p-2 md:p-0 md:flex-col md:right-10 md:top-10 bg-white rounded-xl justify-center md:justify-end z-50 shadow-xl">
            <a
                target="__blank"
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-emerald-800 hover:bg-emerald-800 rounded-full hover:text-white transition-colors duration-300"
                href={links.gfg}
            >
                <SiGeeksforgeeks />
                <span className="sr-only">Twitter</span>
            </a>
            <a
                target="__blank"
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-amber-800 hover:bg-amber-800 rounded-full hover:text-white transition-colors duration-300"
                href={links.leetcode}
            >
                <SiLeetcode />
                <span className="sr-only">LeetCode</span>
            </a>
            <a
                target="__blank"
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
                href={links.codechef}
            >
                <SiCodechef />
                <span className="sr-only">Codechef</span>
            </a>
            <a
                target="__blank"
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-sky-600 hover:bg-sky-600 rounded-full hover:text-white transition-colors duration-300"
                href={links.codeforces}
            >
                <SiCodeforces />
                <span className="sr-only">Codeforces</span>
            </a>
        </div>
    );
}

export default Coding;
