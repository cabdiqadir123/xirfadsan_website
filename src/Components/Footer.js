import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';
import Swal from 'sweetalert2';

function Footer() {
    const [formData, setFormData] = useState({
        to: "xirfadsanxs@gmail.com",
        name: "",
        email: "",
        sub: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://back-end-for-xirfadsan.onrender.com/api/send-email/otp1", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Your message has been sent successfully. We will get back to you soon.",
                    confirmButtonColor: "#FE4C00",
                });
                setFormData({ name: "", email: "", sub: "" });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: data.message || "Failed to send message.",
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Something went wrong. Please try again later. $" + err,
            });
            console.error(err);
        }
    };
    return (
        <div className='footer'>
            {/* SECTION 1 */}
            <div className='f-section-1'>
                <div className='f-section-1-left'>
                    <h1>Get in <br /> Touch</h1>
                    <p>
                        We’d love to hear from you! Please fill out the <br></br> form below and our team will get back to you <br></br> as soon as possible.
                    </p>
                    <span>Follow us on :</span>
                    <div className='f-icons'>
                        <TbBrandLinkedin className='colors-f-icons' />
                        <TbBrandFacebook />
                        <TbBrandTwitter />
                        <TbBrandInstagram />
                    </div>
                </div>

                <div className='f-section-1-right'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name='sub'
                            placeholder='Description'
                            rows={7}
                            value={formData.sub}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className='f-section-2'>
                <div className='f-section-2-top'>
                    <div className='col-8'>
                        <h6>Xirfadsan on-demand services</h6>
                        <p>
                            xirfadsan Company is more than just a home service provider – we are a team of dedicated experts committed to delivering quality services right to your doorstep. From cleaning and plumbing to electrical work, gardening.
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
                            <Link to='/Terms'><span>Terms of Use</span></Link>
                            <Link to='/Deleteacount' style={{ color: "red" }}><span>Delete Account</span></Link>
                        </div>
                    </div>
                </div>

                <div className='f-section-2-bottom'>
                    <h6>xirfadsan.com © 2025 All Right Reserved</h6>
                    <div className='f-icons'>
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

export default Footer;
