import { Email, FacebookOutlined, LinkedIn } from '@mui/icons-material'
import React from 'react'
import { PiLinkedinLogoDuotone } from 'react-icons/pi'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className='footer'>
            <div className='f-section-1'>
                <h1>Subscribe to <br />
                    Our Newsletter
                </h1>
                <p>get weekly update about our project on your email <br />
                    no spam guaranteed we promise
                </p>
                <div className='f-section-1-card'>
                    <span><Email style={{ color: '#f53b03', marginRight: '20px' }} /><input className='f-input' type='text' placeholder='ouremail123@gmail.com'/></span>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='f-section-2'>
                <div className='f-section-1-container-1'>
                    <div className='col-8'>
                        <h6>xirfadsan company</h6>
                        <p >xirfadsan Company is more than just a home service
                            provider –we are a team of dedicated experts
                            committed to delivering quality services right to
                            your doorstep. From cleaning and plumbing to
                            electrical work, gardening,
                        </p>
                    </div>
                    <div className='col6'>
                        <div className='col'>
                            <h6>Pages</h6>
                            <span>Home</span>
                            <span>Service</span>
                            <span>About</span>
                            <span>Blog</span>
                        </div>
                        <div className='col'>
                            <h6>Secure</h6>
                            <Link to="/PrivacyPolicy"><span>Privacy</span></Link>
                            <Link to='/Terms'><span>terms of use</span></Link>
                            <Link to='/Deleteacount' style={{color:"red"}}><span>Delete Account</span></Link>
                        </div>
                    </div>
                </div>
                <div className='f-section-1-container-2'>
                    <h6>xirfadsan.com © 2025 All Right Reserved</h6>
                    <div className='f-section-1-container-2-icons'>
                        <TbBrandLinkedin />
                        <TbBrandFacebook />
                        <TbBrandTwitter />
                        <TbBrandInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer