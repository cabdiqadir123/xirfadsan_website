import React from 'react'
import blogimg from '../assets/images/Frame 34849.png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

import Right from '../assets/icon/Right.png'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
function Deleteacount() {
    return (
        <div className='page'>
            <div className='d-header'>
                <h1>My Account</h1>
                <p>please fill this form to delete to user Account in xirfadsan service application and <br></br>
                    look General section to know what is you deleting  </p>
            </div>
            <div className='delete-section-1'>
                <div className='d-container-1'>
                    <h2>Do you realy want to Permanently <br></br>
                        selete your account</h2>
                    <h4>You will delete your entire account and <br></br>
                        will be removed  from our workspace <br></br>
                        with this email and look botton to see what will deletd : </h4>
                    <div className='d-container-info-1' >
                        <h1>General</h1>
                        <p>All Bookings</p>
                        <p>Al Complaint</p>
                        <p>All Notification</p>
                        <p>All Invoices</p>
                        <p>Subscribtion to this page</p>
                    </div>
                </div>
                <div className='d-container-2'>
                    <form className='form'>
                        <div className='form-box'>
                            <input type='text' placeholder='Enter signed email' />
                        </div>
                        <div className='form-box'>
                            <input type='text' placeholder='Enter signed Phone' />
                        </div>
                        <div className='form-box'>
                            <input type='text' placeholder='Enter the reason' />
                        </div>
                    </form>
                    <div className='d-confirm'>
                        <span>Delete Personal Account</span>
                        <p>Permanently remove your Personal Account and all of its contents from the vercal platform.
                            this action is not reversible, so please continue with caution</p>
                        <div className='btn-confirm'>
                            <button>Delete Personal Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deleteacount