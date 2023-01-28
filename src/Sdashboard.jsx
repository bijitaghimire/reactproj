import React from 'react'
import './sdashboard.css';
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export default function Sdashboard() {
  return (
    <div className='sd-items'>
      <div className='row-1-sd'>
        <h1 className='course-name'>Courses</h1>
        <div className='col-1--r1-sd'>
        <h3>Operating System</h3> <br/><br/>
        <p>Operating system (OS) manages all of the software and hardware on the computer. It performs basic tasks such as file, memory and process management, handling input and output, and controlling peripheral devices such as disk drives and printers.</p>
        <span>Author Name:</span>
        <br/>
        <div className='heart'><FaRegHeart/>&nbsp; <AiOutlineDownload/></div>
        </div>
        <div className='col-2--r1-sd'>
        <h3>Artificial Intellience.</h3><br/>
        <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
        <span>Author Name:</span>
        <br/>
        <div className='heart'><FaRegHeart/>&nbsp; <AiOutlineDownload/></div>
        
        </div>
        <div className='col-3-r1-sd'>
        <h3>Software engineering.</h3><br/>
        <p>A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software..</p>
        <span>Author Name:</span>
        <br/>
        <div className='heart'><FaRegHeart/><AiOutlineDownload/></div>
        </div>

      </div>
      <div className='row-2-sd'>
        <div className='col-1-r2-sd'>
        <h2>Hello guys.</h2>
        <h2>Good to see you again.</h2>
       
       

        </div>
        <div className='col-2-r2-sd'>
        <h3>Most viewed courses:</h3>
        <ul >
          <li>Artificial Intellience</li>
          <li>Data science</li>
          <li>Machine Learnig</li>
        </ul>
        </div>
        <div className='col-3-r2-sd'>
        <h3>List of Teachers Available</h3>
        <ul>
          <li>Hari Sharma</li>
          <li>Kedar Poudel</li>
          <li>Manoj bhattarai</li>
        </ul>
        
        </div>

      </div>
     
    </div>
  )
}
