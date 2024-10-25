// import React from "react";
//  import FooterSection from "./components/FooterSection";

import About from "./assets/About.png";
import FooterSections from "./components/FooterSections";


const App = () => {
  return (  
    
    <div>
      
    {/*--------------- About sections-------------- */}
      <div className=" justify-center max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center text-[38px] text-black font-bold mb-2 font-poppins">About</h1>
      <p className=" text-center font-bold text-2xl text-black md:text-md text-[21px] justify-evenly ">Join our community & Explore Thousands of Jobs, tips & Course</p> 
      
      <div className=" About- container">
        <div className="flex flex-col  md:flex-row justify-start sm:mb-5 items-center gap-4 md:pl-40">
          < a href='https://www.instagram.com/gettograde.inc/'>
          <img src={About} alt='About'/>
          </a>
          <div className="flex flex-col justify-evenly  gap-4">
            <h1 className="lg:4xl text-xl md:text-3xl font-bold text-black mb-2 tracking-wide leading-tight  ">Thousand Of Top Courses<br/> Now In One Place</h1>
            <p className=" lg:text-2xl text-md md:text-lg text-black font-semibold">By connecting students all over the tamilnadu to<br/>
            the best instructors, we helping individuals reach<br/>their goals and pursue their dreams.</p>
          
            <ul>
              <li className="text-md md:text-md lg:text-2xl text-black font-medium font-poppins">• The Most World Class Instructors Access</li>
              <li className="text-md md:text-md lg:text-2xl  text-black font-medium font-poppins">• Access Your Class anywhere </li>
              <li className="text-md md:text-md lg:text-2xl text-black font-medium font-poppins">• Flexible Course Plan & Life Time Career Support</li>
            </ul>
          
          </div>
        </div>
      </div>
      </div>
     
      < FooterSections />
      < footer/>
    </div>


  )
}

export default App