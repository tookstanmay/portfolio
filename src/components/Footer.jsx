import React from 'react'
import "../index.css"
import { FaGithubAlt } from 'react-icons/fa'

function Footer({github}) {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <p className="text-gray-600 mb-4">
        Made with <span role="img" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline" href="https://github.com/tookstanmay">tookstanmay</a>
      </p>
      <a className='about-cta' href={github} target={"_blank"} style={{marginTop: "10px"}}>
      <FaGithubAlt />
      <span style={{marginLeft: "5px"}}> Follow on Github</span>
      </a>
    </div>
  )
}

export default Footer