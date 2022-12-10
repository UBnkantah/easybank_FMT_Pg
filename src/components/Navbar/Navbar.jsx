import React, {useRef} from 'react'
import Logo from "../images/logo.svg"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {

    const NavRef = useRef()

    const showNavbar = () => {
        NavRef.current.classList.toggle("responsive_navbar")
    }

  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <nav ref={NavRef}>
        <a href="/">Home</a>
        <a href="/">About</a>       
        <a href="/">Contact Us</a>
        <a href="/">Blogs</a>
        <a href="/">Careers</a>
        <button className='request'>
            Request Invite
        </button>
        <button className='nav-btn nav-close' onClick={showNavbar}>
            <FaTimes size={"20px"} />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
            <FaBars size={"20px"} />
      </button>
    </div>
  )
}

export default Navbar
