import { useState, useEffect } from 'react'

 import footer from "../assets/footer.png";
 import  logo from "../assets/logo.png";
 import Instagram from "../assets/Instagram.png";
 import Facebook from "../assets/Facebook.png";
 import youtube from "../assets/youtube.png";
 import Twitter from "../assets/Twitter.png";
import Linkedin from"../assets/Linkedin.png";
const FooterSections = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 68, hours: 11, minutes: 29, seconds: 0 })
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime.seconds > 0) {
            return { ...prevTime, seconds: prevTime.seconds - 1 }
          } else if (prevTime.minutes > 0) {
            return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
          } else if (prevTime.hours > 0) {
            return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
          } else if (prevTime.days > 0) {
            return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
          } else {
            clearInterval(timer)
            return prevTime
          }
        })
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])
    return (
    <div>
    <div className="min-h-72 bg-blue-950 flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-orange-50 rounded-lg shadow-lg overflow-hidden ">
          <div className="p-6 space-y-6 top">

            {/* Header */}
            <div className="flex flex-col h-24 w-auto rounded-xl  bg-white md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-[87px] p-2 ml-2">
                <img src={footer} alt='footer'/>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> */}
                </div>
                
                <div className="">
                  <p className="text-red-500 font-bold">Upcoming Events</p>
                  <h1 className="text-2xl md:text-3xl font-bold">Base way Meetup</h1>
                </div>
              </div>
              <div className="flex space-x-2 mr-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-[#1a237e] text-white p-2 rounded-lg text-center w-16">
                    <div className="text-xl font-bold">{value.toString().padStart(2, '0')}</div>
                    <div className="text-xs">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                  </div>
                ))}
              </div>
            </div>
          
            {/* Main Content */}
            <div className="flex flex-col  md:flex-row justify-between items-start space-y-6 md:space-y-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2">
                    <div className="p-1">
                      <div className=" relative md:top-0 top-16 lg:top-0 flex items-center justify-center">
                          <img src={logo} alt='logo' className="md:w-[96px]lg:w-[100px] w-32"/>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-xl font-semibold">Get to Grade</span> */}
                </div>
                <p className="relative text-sm font-bold max-w-md md:text-sm lg:text-lg lg:top-0 md:top-0 top-12">&quot;I am committed to buildings your career and<br/>amplifying your career growth&quot;</p>
                <div>
                  <h3 className="relative font-bold mb-2 mt-6 lg:top-0 md:top-0 top-12 text-md lg:text-2xl md:text-xl underline decoration-orange-400">Reach Us</h3>
                  <div className=" relative lg:top-0 md:top-0 top-12  flex space-x-2 mt-3 pl-10">
                   <a href="https://www.instagram.com/gettograde.inc/" className="w-5"><img src={Instagram} alt='Instagram'/></a>
                      <a href="#" className="w-5"><img src={Facebook} alt='Facebook'/></a>
                      <a href="#" className="w-5"><img src={youtube} alt='youtube'/> </a>
                      <a href="#" className="w-5"><img src={Twitter} alt='Twitter'/></a>
                      <a href="#" className="w-5"><img src={Linkedin} alt='Linkedin'/></a>
                  </div>
                </div>
              </div>

              {/*Need help sections*/}
              <div className="w-full md:w-auto space-y-4 p-6 ">
                <div>
                  <h3 className="relative top-5 lg:top-0 md:top-0 font-bold text-md  lg:text-xl md:text-xl mb-2 underline decoration-red-400">Need Any Help ?</h3>
                  {/* <p className=" flex-row space-x-10 p-2 " >
                   <a href="tel:+917708446450" className="text-black  text-sm md:text-md lg:text-xl font-bold underline md:text-justify">+91 77084 46450</a>
                </p>
                  </p> */}
                <p className="relative top-5 md:flex-col flex-col md:space-x-8 space-x-6">
                <a href="mailto:gettograde.in@gmail.com" className="text-black text-sm md:text-md lg:text-xl font-bold underline">gettograde@gmail.com</a>
                <a href="tel:+917708446450" className="text-black  text-sm md:text-md lg:text-xl font-bold underline md:text-justify">+91 77084 46450</a>
                </p>
                </div>

                   {/* Email subscription */}
                <div className=" relative md:top-20 max-w-md mx-auto p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2 md:text-md text-sm lg:text-md text-center md:text-center text-blue-800">Get Regular Updates from Get to Grade</h3>
                  <form className="relative">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-64 items-center md:w-full lg:w-full bg-gray-300 text-sm md:text-md lg:text-md  px-4 py-3 rounded-full border-gray-700 text-black dark:bg-gray-700  dark:placeholder-gray-700 dark:text-white focus:outline-1 focus:ring-2 focus:ring-black pr-32"
          required/>
        <button
          type="submit"
          className="absolute right-1 top-1 px-4 py-2 text-sm md:text-md lg:text-md text-white bg-blue-950 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          Get Started
        </button>
      </form> 
      </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" underline text-white text-center py-4">
        <p>Copyrights © 2023 Get to Grade. All Rights Reserved</p>
      </footer>
    </div>


    </div>
  )
}
export default FooterSections;