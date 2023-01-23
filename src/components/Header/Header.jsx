import React from 'react'
import './header.css'

function Header() {
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
  return (
    <div className='background'>
      {/* TRYING TO USE PARENT */}
      <div className="parent-box">
      <div className='top-words'>
        <div id="about">A̲bout</div>
        {/* <div id="contact">C̲ontact</div> */}
        {/* need to link these to respective pages*/}
      </div>
      <div className='frosted-glass'>
        <h1 className='font-face-bcb'>
          <a href="../About/About.jsx">
          Start
          </a>
          </h1>
        <span className='font-face-bcrblink'> &#x3e; </span>
        <h5 className='font-face-bcr' > Koh Sherlynn Phyllisa</h5>
        <br />
        {/* part i changed */}
        <h5 className='font-face-bcr'> LAST UPDATE: {date}-0{month}-{year%2000}</h5>
        <span className='font-face-bcrblink'>_ </span>
      </div>
      </div>
    </div>
  )
}

export default Header