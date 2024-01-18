import React, {useState} from 'react'
import './navbar.css'
import { FaBriefcase } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // makita navbar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    // mawala navbar
    const removeNav = ()=>{
        setActive('navBar ')
    }
  return (
 <section  className='navBarSection'>
    <header className="header flex">
    <div className="logoDiv">
    <a href="" className="logo flex">
        <h1><FaBriefcase className="icon"/>TraBakante</h1>
    </a>
    </div>
    <div className={active}>
        <ul className="navLists flex">
            
            <li className="navItem">
                <a href="#" className="navLink">Home</a>
                </li>
            <li className="navItem"> 
            <a href="#" className="navLink">Find Jobs</a>
             </li>
            <li className="navItem"> 
            <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">  
              <a href="#" className="navLink">Contact</a>
              </li>
                
               
            <button className='btn'>
                <a href="#">LOGIN</a>
            </button>
        </ul>

        <div onClick={removeNav} className="closeNav"><AiFillCloseCircle className='icon'/></div>
    </div>

<div onClick={showNav}className="pindotNavbar">
<TbGridDots className='icon'/>
</div>

    </header>
 </section>
  )
}

export default Navbar