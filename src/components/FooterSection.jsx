
import React from 'react'

import footer from "../assets/footer.png";
import  logo from "../assets/logo.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import youtube from "../assets/youtube.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from"../assets/Linkedin.png";

const FooterSection = () => {
  
  const [counter, setCounter] = React.useState(60); 
  React.useEffect(function () {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    
  <>
  {/* //parentdiv */}
    <div className="min-h-80 flex flex-col items-center justify-center bg-black md:bg-blue-950 lg:bg-blue-950">


        <div className="w-[900px] flex- mx-auto bg-orange-50 shadow-lg rounded-lg p-6">
          <div className="bg-white p-4 mb-4 rounded">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                 <div className=" w-[87px]"><img src={footer} alt='footer'/></div>
                 <div>
                 <h1 className="text-red-500 font-bold text-lg">Upcoming Events</h1>
                 <h2 className="text-2xl font-bold">Baseway Meetup</h2>
                 </div>
                  
                </div>
              </div>
              {/* CounterTimer Section */}
              {/* Days */}
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
      <div className="text-center flex flex-col p-2 rounded-2xl text-white bg-blue-950">
      <span className="countdown font-semibold text-4xl">
      <span style={{"--value":74}}></span>
    </span>
    days
      </div>
      {/* Hours */}
      <div className="text-center flex flex-col p-2 rounded-2xl text-white bg-blue-950 ">
      <span className="countdown font-bold text-4xl">
      <span style={{"--value":13}}></span>
    </span>
    hours
      </div>
      {/* Minutes */}
      <div className="text-center flex flex-col p-2 rounded-2xl text-white bg-blue-950">
      <span className="countdown font-semibold text-4xl">
      <span style={{"--value":8}}></span>
    </span>
    min
      </div>
      {/* Seconds  */}
      <div className="text-center flex flex-col p-2 rounded-2xl text-white bg-blue-950">
  <span className="countdown font-semibold text-4xl">
    <span style={{ "--value": counter}}></span>
  </span>
  sec 
</div>
</div>
{/* CounterTimer Sections End */}
    </div> 
    </div>

          <div className="p-4 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="text-center md:text-left">
                <img src={logo} alt='logo'/>
                  {/* <h3 className="text-yellow-600 font-bold text-sm">Get to Grade</h3> */}
                  <p className="text-md font-bold mt-2">
                    &quot;I am committed to building your career and <br />amplifying your career growth&quot;
                  </p>
                  <div className="mt-6 text-xl ">
                    <h4 className="font-bold underline decoration-orange-400">Reach Us</h4>
                    <h4></h4>
                    <div className="flex space-x-2 mt-3">
                      <a href="https://www.instagram.com/gettograde.inc/" className="w-5"><img src={Instagram} alt='Instagram'/></a>
                      <a href="#" className="w-5"><img src={Facebook} alt='Facebook'/></a>
                      <a href="#" className="w-5"><img src={youtube} alt='youtube'/> </a>
                      <a href="#" className="w-5"><img src={Twitter} alt='Twitter'/></a>
                      <a href="#" className="w-5"><img src={Linkedin} alt='Linkedin'/></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 flex flex-row">
                <p className="font-bold text-black">NEED ANY HELP?</p>
                <p>
                  <a href="mailto:gettograde.in@gmail.com" className=" text-black font-bold underline">
                    gettograde.in@gmail.com
                  </a>
                  <p className="font-bold underline">+91 77084 46450</p>
                </p>
                {/* <p>+91 77084 46450</p> */}
              </div>
            </div>
          </div>

          <div className="p-4 rounded ">
            <div className="text-center">
              <p className="mb-2 text-blue-800">Get Regular Updates from Get to Grade</p>
              <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative pt-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    {/* <svg className ="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg> */}
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-md text-gray-300 border text-md md:text-md rounded-full font-semibold bg-gray-300 focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white " placeholder="Enter your email address" required />
                  <button type="submit" className="text-white font-semibold absolute end-2.5 bottom-2.5 bg-blue-950 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-3xl text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
                </div>
              </form>
              {/* <input
      type="email"
      placeholder="Enter your email address"
      className="p-2 border border-gray-300 rounded mb-2"/
    />
    <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
      Get Started
    </button> */}

            </div>
          </div>
        </div>
        <footer className="py-8 text-white flex-col">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
            <p className="text-center md:text-left underline text-poppins font-bold">&copy; 2023 Get to Grade. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0"></div>
          </div>
        </footer>

      </div></>
  )
}
export default FooterSection;