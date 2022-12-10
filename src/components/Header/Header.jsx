import React from 'react'
import HeaderImg from "../images/image-mockups.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='details'>
        <h1>
            Next generation digital banking
        </h1>
        <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
        </p>
        <div className="button">
          <button>
              Request Invite
          </button>
        </div>
        
      </div>
      <div className='img'>
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  )
}

export default Header
