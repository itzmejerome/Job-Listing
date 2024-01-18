import React, {useEffect} from 'react'
import './home.css'
import video1 from '../../Assets/video1.mp4'
import { BsSuitcase2 } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return ( 
   <section className='home'>
   <div className="overlay"></div>
   <video src={video1} muted autoPlay loop type="video/mp4"></video> 

    <div className="homeContent container">
      <div className="textDiv">
        <span data-aos="fade-up"className="smallText">
        Pleasure in the job puts perfection in the work
        </span>
        <h1 data-aos="fade-up" className="homeTitle">
          Search for work
        </h1>
      </div>

      <div data-aos="fade-up" className="cardDiv grid">
    <div className="desInput">
      <label htmlFor="job">Search for Jobs</label>
<div className="input flex">
  <input type="text" placeholder='Enter Name Here' />
  <BsSuitcase2 className="icon"/>
</div>
    </div>
    <div className="dateInput">
      <label htmlFor="job">Select date</label>
<div className="input flex">
  <input type="date" placeholder='Enter Name Here' />
  
</div>
    </div>
    <div className="salaryInput">
      <div className="label_ni flex">
        <label htmlFor="price">Max salary:</label>
        <h3 className="total">₱10000</h3>
      </div>
      <div className="input flex">
        <input type="range" max="5000" min="1000" />
      </div>
    </div>

    <div className="searchOptions flex">
    <HiFilter className="icon"/>
    <span>MORE FILTERS</span>
    </div>
      </div>
      
      <div data-aos="fade-up" className="homeFooterIcons flex">
        <div className="rightIcons">
        <FiFacebook className="icon"/>
        <FaGithub className="icon"/>
        <CiLinkedin className="icon"/>
        </div>
        <div className="leftIcons">
        <CiBoxList className="icon"/> 

        </div>
      </div>


    </div>
    

   </section>
  )
}

export default Home