import React from 'react'
import OnlineImg from "../images/icon-online.svg"
import SimImg from "../images/icon-budgeting.svg"
import FastImg from "../images/icon-onboarding.svg"
import OpenImg from "../images/icon-api.svg"
import "./Choose.css"
const Choose = () => {
  return (
    <div className='choose'>
      <div className='top-choose'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
        </p>
      </div>
      <div className='chose-box'>
        <div className="choose-details">
          <img src={OnlineImg} alt="" />
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
        <div className="choose-details">
          <img src={SimImg} alt="" />
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits</p>
        </div>
        <div className="choose-details">
          <img src={FastImg} alt="" />
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>

        </div>
        <div className="choose-details">
          <img src={OpenImg} alt="" />
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}

export default Choose
