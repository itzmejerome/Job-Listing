import React, {useEffect} from 'react'
import './main.css'



import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";

import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img1,
    jobTitle: 'Web Developer',
    location: 'pelepens',
    salary: '100php',
    duration: 'fulltime',
    description: 'create web web web web web web para mutaas description',

  },
  {
    id:2,
    imgSrc: img2,
    jobTitle: 'Carpenter',
    location: 'Land of dawn',
    salary: '100php',
    duration: 'fulltime',
    description: 'create web web web web web web para mutaas description',

  },
  {
    id:3,
    imgSrc: img3,
    jobTitle: 'Doctor',
    location: 'Mars',
    salary: '100php',
    duration: 'fulltime',
    description: 'create web web web web web web para mutaas description',

  },
  // {
  //   id:4,
  //   imgSrc: img4,
  //   jobTitle: 'Web Developer',
  //   location: 'New Zealand',
  //   salary: '100php',
  //   duration: 'fulltime',
  //   description: 'create web web web web web web para mutaas description',

  // },
]

const Main = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
<section className="main container section">
 <div data-aos="fade-right"
          className="secTitle">
  <h3 className="title">Job feed for you</h3>
 </div>
 <div className="secContent grid">


  {
    Data.map(({id, imgSrc, jobTitle, location,salary,duration,
      description})=>{
      return(
          <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imgDiv">
              <img src={imgSrc} alt={jobTitle} />

            </div>
            <div className="cardInfo">
              <h4 className="jobTitle">{jobTitle}</h4>
              <span className="continent flex">
              <HiLocationMarker className='icon' /><span className="name">{location} </span></span>

              <div className="salary flex">
                <div className="grade">
                  <span>{duration}<small>+1</small></span>
                </div>
                <div className="salary2">
                  <h5>{salary}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'>
                Apply <MdOutlineWork />
              </button>
            </div>
          </div>
          
      )
    })
  }
 </div>
</section>
  )
}

export default Main


