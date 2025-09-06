import React, { useEffect, useState } from 'react'
import blogimg from '../assets/images/Frame 34849 (1).png'
import frame1 from '../assets/images/Frame 34844 1.png'
import frame2 from '../assets/images/Frame 34844.png'
import frame3 from '../assets/images/Frame 34844 (1).png'
import frame4 from '../assets/images/Frame 34844 (2).png'
import frame5 from '../assets/images/Frame 34844 (3).png'
import frame6 from '../assets/images/Frame 34844 (4).png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'
import { Link } from 'react-router-dom'
function Blog() {
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    fetch('https://back-end-for-xirfadsan.onrender.com/api/blog/all')
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
        console(err.message); // Handle any errors
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className='page'>
      <div className='blog-section-1'>
        <h1>Here are our blog <br /> Articles</h1>
        <h6>Read these articles and blog they will help you to learn
          <br />the errorncomes to your services
        </h6>
        <div className='bs-1-img'>
          <img src={blogimg} alt='' />
        </div>
      </div>
      <div className='blog-section-2'>
        <div className='blog-section-2-col-1'>
          <h3>What Blog & <br></br> articles we write</h3>
          <h6>From the latest tech trends to our plans, find out <br />
            what makes Rukun company tech
          </h6>
        </div>
        <div className='blog-section-2-col-2'>
          {data.map((item) => (
            <div className='bl-box'>
              <div className=''>
                <img src={item.imageUrl ? item.imageUrl : `https://back-end-for-xirfadsan.onrender.com/api/blog/image/${item.id}`} alt='' />
              </div>
              <div className='bl-lists-box'>
                <h4>{item.title}</h4>
                <p>{item.blog.substring(0, 100)}...</p>
                <Link to={`/Blogarticles/${item.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          ))}
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

export default Blog