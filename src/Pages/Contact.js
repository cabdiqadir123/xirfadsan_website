import React from 'react'
import blogimg from '../assets/images/Frame 34849.png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

import Right from '../assets/icon/Right.png'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
function Contact() {
  return (
    <div className='page'>
      <div className='cont-section-1'>
        <div className='cont-section-1-header'>
          <h1>Here are our Contact <br></br>
            form page
          </h1>
          <p>We’d love to hear from you! Please fill out the form <br></br>
            below and our team will get back to you as <br></br>
            soon as possible.</p>
        </div>
        <div className='cont-articles-1-img'>
          <img src={blogimg} alt='' />
        </div>
      </div>
      <div className='cont-section-2' style={{ paddingBottom: "80px" }}>
        <div className='cont-section-2-col-1'>
          <h1>Get in Touch</h1>
          <h6 style={{ marginTop: "20px" }}>
            We’d love to hear from you! Please fill out the form <br />
            below and our team will get back to you as <br />
            soon as possible.
          </h6>
          <div className='contact-section-2-info'>
            <div>
              <span>PHONE NUMBR</span>
              <p>+252614465608</p>
            </div>
            <div>
              <span>WHATSAPP NUMBER</span>
              <p>+252614465608</p>
            </div>
            <div>
              <span>SUPPORT</span>
              <p>example@gmail.com</p>
            </div>
          </div>
          <h3>Follow us on:</h3>
          <div className='cont-section-2-socialmedia'>
            <div className='cont-section-2-sm'>
              <TbBrandFacebook />
            </div>
            <div className='cont-section-2-sm'>
              <TbBrandLinkedin />
            </div>
            <div className='cont-section-2-sm'>
              <TbBrandTwitter />
            </div>
            <div className='cont-section-2-sm'>
              <TbBrandInstagram />
            </div>
          </div>
        </div>
        <div className='contact-section-2-col-2'>
          <input type='text' placeholder='Name *' />
          <input type='text' placeholder='Email *' />
          <input type='text' placeholder='Phone *' />
          <textarea placeholder='Phone number' />
          <button>SEND US A MESSAGE</button>
        </div>
      </div>
      <div className='blog-section-4'>
        <h1>Become rukun Member <br /> like you want</h1>
        <div className='bl-s4-container'>
          <div className='bs-4-box'>
            <div className='bs-4-box-info'>
              <span>Client</span>
              <h3>Award-wining courses to
                explore at your own pace
              </h3>
              <p>Easy access client tasks and projects.</p>
              <p>Direct booking and secure payments.</p>
              <p>Tools to enhance service quality.</p>
              <button>Join as clieny</button>
            </div>
            <div className='img-frame'>
              <img src={frame7} alt='' />
            </div>
          </div>
          <div className='bs-4-box'>
            <div className='bs-4-box-info'>
              <span>Client</span>
              <h3>Award-wining courses to
                explore at your own pace
              </h3>
              <p>Easy access client tasks and projects.</p>
              <p>Direct booking and secure payments.</p>
              <p>Tools to enhance service quality.</p>
              <button>Join as clieny</button>
            </div>
            <div className='img-frame'>
              <img src={frame8} alt='' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact