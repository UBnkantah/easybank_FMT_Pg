import React from 'react'
import logo from "../images/logo.svg"
import FBImg from "../images/icon-facebook.svg"
import InstaImg from "../images/icon-instagram.svg"
import TweetImg from "../images/icon-twitter.svg"
import PinImg from "../images/icon-pinterest.svg"
import YouTubeImg from "../images/icon-youtube.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <img src={logo} alt="" />
        <div className='social-icons'>
            <img src={FBImg} alt="" />
            <img src={YouTubeImg} alt="" />
            <img src={TweetImg} alt="" />
            <img src={PinImg} alt="" />
            <img src={InstaImg} alt="" />
        </div>
      </div>
      <div className="content">
        <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Blog</a></li>
        </ul>
      </div>
      <div className="content">
        <ul>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Support </a></li>
            <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="content">
        <button>Request Invite</button>
        <p>EasyBank. All Right Resevered</p>
      </div>

    </div>
  )
}

export default Footer
