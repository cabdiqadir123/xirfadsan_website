import React, { useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'

import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

function About() {
  const [openIndex, setOpenIndex] = useState(null); // tracks which item is open

  const toggleDescription = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if same item is clicked
    } else {
      setOpenIndex(index); // open the clicked item
    }
  };
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    fetch('https://back-end-for-xirfadsan.onrender.com/api/faq/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setdata(data); // Set the data to state
      })
      .catch(err => {
        console.log(err.message); // Handle any errors
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className='page'>
      <div className='ab-section-1'>
        <h1>We making a difference <br /> to people's lives</h1>
        <p>creating a way to connect people ready to work withpeople <br />
          who need work done</p>
        <button>Contact us</button>
      </div>
      <div className='ab-section-2'>
        <div className='ab-section-2-img'></div>
        <div className='ab-section-2-list'>
          <div className='ab-section-2-list-box'>
            <h1>11M+</h1>
            <p>customer <br /> in Rukun</p>
          </div>
          <div className='ab-section-2-list-box'>
            <h1>450</h1>
            <p>Employee<br /> in Rukun</p>
          </div>
          <div className='ab-section-2-list-box'>
            <h1>018</h1>
            <p>status <br /> in Rukun</p>
          </div>
          <div className='ab-section-2-list-box'>
            <h1>2023</h1>
            <p>Founding <br /> in Rukun</p>
          </div>
        </div>
      </div>
      <div className='ab-section-3'>
        <h1>Our mission</h1>
        <p>At Rukun Company, our mission is to make home services more accessible,
          reliable, and affordable. We aim to connect our community with skilled
          professionals who get the job done right the first time.
          If a worker makes a mistake,
          we take full responsibility to ensure the issue is resolved. <br />
          <br />
          Rukun Company is more than just a home service provider –
          we are a team of dedicated experts committed to delivering quality
          services right to your doorstep.
          From cleaning and plumbing to electrical work, gardening.
        </p>
      </div>
      <div className='ab-section-4'>
        <div className='ab-section-4-box'>
          <h1>Who we are & how<br /> we arrived here ?</h1>
          <span>Who we are</span>
          <h6>Rukun Company is more than just a home service provider –
            we are a team of dedicated experts committed to delivering quality
            services right to your doorstep. From cleaning and plumbing
            to electrical work, gardening, AC installation and maintenance, interior design, and beyond,
            we strive to make home management simple, efficient, and stress-free.
          </h6>
          <span>How wo got here</span>
          <h6>
            Our journey began with a vision: to build a system that simplifies
            the process of finding trustworthy home service professionals.
            We started by developing the technology – creating a reliable system and
            user-friendly apps to ensure smooth service delivery. Now, as we prepare
            to launch our website, we are taking the finalstep towards making
            Rukun Company a household name. Soon, we will proudly unveil our company
            and services to the community, Insha'Allah.
            At Rukun Company, we believe in doing things right. Whether you need
            a quick repair or a complete home makeover, we’re here to provide
            top-notch service with integrity and professionalism.
            Experience the future of home services with Rukun Company – where quality meets convenience.
          </h6>
        </div>
      </div>
      <div className='ab-section-5'>
        <h1>Got any questiobs? we <br /> have got answers.</h1>
        <div className='ab-section-5-container'>
          <div className='ab-section-5-container-box-1'>
            {data.map((item, index) => (
              <div key={index} className="ab-section-5-box">
                <span
                  onClick={() => toggleDescription(index)}
                >
                  {item.question} <BiPlus />
                </span>
                {openIndex === index && (
                  <p>
                    {item.answer} {/* show description only for the clicked item */}
                  </p>
                )}
              </div>
            ))}
          </div>
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

export default About