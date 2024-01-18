import React, {useEffect} from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import { MdOutlineWork } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'> </video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>MESSAGE US!</small>
            <h2>Work with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className='logo flex'>
              <MdOutlineWork className="icon"/>Work
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              just work   just work  just work  just work  just work  just workjust work
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
            <FaFacebook className="icon"/>
            <FaLinkedin className="icon"/>
            <FaGithub className="icon"/>
            </div>
          </div>
        

        <div className="footerLinks grid">
          <div data-aos="fade-up"
          data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              MSU-NAAWAN
            </span>

            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            School
            </li>
            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            DEAN
            </li>
            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            Chancellor
            </li>
          </div>
          <div data-aos="fade-up"
          data-aos-duration="4000" 
          className="linkGroup">
            <span className="groupTitle">
              TRABAKANTE
            </span>

            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            Members
            </li>
            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            BSIT
            </li>
            <li className="footerList flex">
            <FaChevronRight className="icon"/>
            Advisor
            </li>
          </div>
          
          </div>

          <div className="footerDiv Flex">
            <small>TRABAKANTE JOB LISTING WEB APP</small>
            <small>COPYRIGHTS RESERVED - BSIT 2024</small>
          </div>
        </div>
      </div>




    </section>
  )
}

export default Footer