import React, { useEffect, useState } from 'react'
import playstore from '../assets/icon/playstore_100px.png'
import { AccountBalanceWalletOutlined, AddModeratorOutlined, AvTimer, CalendarMonth, Person2Outlined, Schedule, Star, StarHalf, TimerOutlined, WorkspacesSharp } from '@mui/icons-material'
import { TbClockRecord } from 'react-icons/tb'
import Hs_img1 from '../assets/images/home page img1.png'
import dots from '../assets/images/dots.png'

import psicon from '../assets/images/psicon.png'
import apsicon from '../assets/images/apsicon.png'

import hormuud from '../assets/logo/hormuud logo.png'
import somnet from '../assets/logo/somnet logo.png'
import somtel from '../assets/logo/somtel logo.png'
import somalisudanese from '../assets/logo/somali sudanese logo.png'
import baraka from '../assets/logo/baraka hospital logo.png'
import royal from '../assets/logo/royal hospital logo.png'

import Serviceimage from '../assets/images/Service Image.png'
import { BsClock } from 'react-icons/bs'

import workspace_premium from '../assets/icon/workspace_premium.png'

import Ellipse from '../assets/images/Ellipse 46.png'
import workspace from '../assets/icon/workspace.png'
import Vector from '../assets/icon/Vector 1.png'
import Frame from '../assets/icon/Frame 34837.png'
import arrowforward from '../assets/icon/Icons.png'
import Frame2 from '../assets/icon/Frame 34815.png'
import Frame3 from '../assets/images/Frame 34842.png'
import { Slide } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    fetch(`https://back-end-for-xirfadsan.onrender.com/api/blog/all`)
      .then((res) => res.json())
      .then((data) => {
        // Exclude the current one
        const filtered = data;;
        setSimilar(filtered.slice(0, 3)); // limit to 3
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className='page'>
      <div className='h-s1'>
        <h1>Find professional<br />
          Servies in your area</h1>
        <p>Pay workers security, with confidence, hore vetted, qualified<br />
          workers for your project</p>
        <div className='h-s1-buttons'>
          <div className='h-s1-btn'>
            <img src={psicon} alt='' width="34.72" height="39" />
            <div className='h-s1-btn-con'>
              <p>Get in on</p>
              <h4>Google play</h4>
            </div>
          </div>
          <div className='h-s1-btn'>
            <img src={apsicon} alt='' width="32.92" height="32.97" />
            <div className='h-s1-btn-con'>
              <p>Get in on</p>
              <h4>App store</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section-2'>
        <div className='home-section-2-dots'>
          <img src={dots} alt='' />
        </div>
        <div className='home-section-2-container'>
          <div id="h-section-box" className='h-section-box-1'>
            <h1>About us</h1>
            <div className='hsection-box-2'>
              <p>We connect with reliable and skilled
                professinals offering on-demand services
                right in your local area. Rukun makes it
                easy to findd and  book trusted experts who
                can get the job done quicly and
                efficiently.
              </p>
            </div>
            <button>Contact us</button>
          </div>
          <div className='home-section-2-img'>
            <img src={Hs_img1} alt='' />
          </div>
          <div id="h-section-box" className='h-section-box-2'>
            <h4><WorkspacesSharp /> On-demand <br /> handman service</h4>
            <h4><TbClockRecord className='h-section-box-2-icon' /> Service tracking <br /> AND history</h4>
            <h4><Schedule /> Task scheduling and <br /> reminders</h4>
          </div>
        </div>
      </div>
      <div className='home-section-3'>
        <img src={hormuud} alt='' />
        <img src={somnet} alt='' />
        <img src={somtel} alt='' />
        <img src={somalisudanese} alt='' />
        <img src={baraka} alt='' />
        <img src={royal} alt='' />
      </div>
      <div className='home-section-4'>
        <div className='home-section-4-container-1'>
          <h1>Instangly submit your <br /> first task</h1>
          <h6>Save your self hours and get your to-do list <br /> completed</h6>
          <p> <div className='home-section-4-nums'>1</div> Simplifies task passing and project management</p>
          <p> <div className='home-section-4-nums'>2</div> Connect clients with skilled service providers</p>
          <p> <div className='home-section-4-nums'>3</div> Offers quidance for informed decision-making</p>
          <button>Become a client</button>
        </div>
        <div className='home-section-4-container-2'>
          <div className='home-section-4-card'>
            <img src={Serviceimage} alt='' />
            <div className='home-section-4-card-box'>
              <h6>AC Jet Wash</h6>
              <div className='home-section-4-card-box-tb'>
                <div className='home-section-4-box-tb-icon'>
                  <CalendarMonth />
                  <BsClock />
                </div>
                <div className='home-section-4-box-tb-date'>
                  <span style={{
                    marginTop: '3px'
                  }}> 30 may, 2024</span>
                  <span style={{
                    marginTop: '-1px'
                  }}> 09:00 AM -10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className='home-section-4-card'>
            <img src={Serviceimage} alt='' />
            <div className='home-section-4-card-box'>
              <h6>AC Jet Wash</h6>
              <div className='home-section-4-card-box-tb'>
                <div className='home-section-4-box-tb-icon'>
                  <CalendarMonth />
                  <BsClock />
                </div>
                <div className='home-section-4-box-tb-date'>
                  <span style={{
                    marginTop: '3px'
                  }}> 30 may, 2024</span>
                  <span style={{
                    marginTop: '-1px'
                  }}> 09:00 AM -10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className='home-section-4-card'>
            <img src={Serviceimage} alt='' />
            <div className='home-section-4-card-box'>
              <h6>AC Jet Wash</h6>
              <div className='home-section-4-card-box-tb'>
                <div className='home-section-4-box-tb-icon'>
                  <CalendarMonth />
                  <BsClock />
                </div>
                <div className='home-section-4-box-tb-date'>
                  <span style={{
                    marginTop: '3px'
                  }}> 30 may, 2024</span>
                  <span style={{
                    marginTop: '-1px'
                  }}> 09:00 AM -10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className='home-section-4-card'>
            <img src={Serviceimage} alt='' />
            <div className='home-section-4-card-box'>
              <h6>AC Jet Wash</h6>
              <div className='home-section-4-card-box-tb'>
                <div className='home-section-4-box-tb-icon'>
                  <CalendarMonth />
                  <BsClock />
                </div>
                <div className='home-section-4-box-tb-date'>
                  <span style={{
                    marginTop: '3px'
                  }}> 30 may, 2024</span>
                  <span style={{
                    marginTop: '-1px'
                  }}> 09:00 AM -10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section-5'>
        <h1>The proven Rukun <br /> Method</h1>
        <h6>Wokka is a service app that connects clients with <br />
          certified service providers its proven data
        </h6>
        <div className='home-section-5-container'>
          <div className='home-section-5-card'>
            <img src={workspace_premium} alt='' />
            <h2>110K+</h2>
            <h6>Money Earned</h6>
          </div>
          <div className='home-section-5-card'>
            <img src={workspace_premium} alt='' />
            <h2>110K+</h2>
            <h6>Money Earned</h6>
          </div>
          <div className='home-section-5-card'>
            <img src={workspace_premium} alt='' />
            <h2>110K+</h2>
            <h6>Money Earned</h6>
          </div>
          <div className='home-section-5-card'>
            <img src={workspace_premium} alt='' />
            <h2>110K+</h2>
            <h6>Money Earned</h6>
          </div>
        </div>
      </div>
      <div className='home-section-6'>
        <div className='home-section-6-bg-img'>
          <div className='home-section-6-card-1'>
            <div className='home-s6-b'>
              <div className='home-s6-box'>
                <img src={Ellipse} alt='' width={40} height={40} className='home-section-6-card-1-img' />
                <div className='col'>
                  <h6>Jacob jones</h6>
                  <div className='home-section-6-icon-list'>
                    <AvTimer className='ic' />
                    <AddModeratorOutlined className='ic' />
                    <AccountBalanceWalletOutlined className='ic' />
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <img src={workspace} alt='' style={{ float: 'right' }} />
              </div>
            </div>
            <div className='home-s6-box-info'>
              <p style={{ color: 'grey', margin: '-5px', }}>
                <Person2Outlined id='home-s6-ic' style={{ color: 'black' }} /> Electricion
              </p>
              <p style={{ margin: '-5px' }}>
                <StarHalf id='home-s6-ic' style={{ color: 'gold', margin: '0px' }} />
                4.9 (40+ Rating)
              </p>
              <div>
                <span style={{ color: '#FE4C00', fontWeight: "bold", margin: '-5px' }}>
                  Active
                </span>
                <span style={{ lineBreak: '0' }}>
                  -1 offer
                </span>
              </div>
            </div>
          </div>
          <div className='home-section-6-card-2'>
            <div className='home-section-6-card-2-box'>
              <img src={Frame} alt='' />
              <div style={{ marginTop: "10px" }}>
                <h6 style={{ lineHeight: '0' }}>Jacob</h6>
                <p style={{ margin: '0', color: 'grey' }}>
                  ***1258
                </p>
              </div>
            </div>
            <div className='home-section-6-card-2-vector'>
              <img src={Vector} alt='' />
            </div>
          </div>
        </div>
        <div className='home-section-6-container-1'>
          <h1>Instangly submit your <br /> first task</h1>
          <h6>Save your self hours and get your to-do list <br /> completed</h6>
          <p> <div className='home-section-6-nums'>1</div> Simplifies task passing and project management</p>
          <p> <div className='home-section-6-nums'>2</div> Connect clients with skilled service providers</p>
          <p> <div className='home-section-6-nums'>3</div> Offers quidance for informed decision-making</p>
          <button>Become a client</button>
        </div>
      </div>
      <div className='home-section-7'>
        <div className='home-section-7-container-1'>
          <h1>Earn more from <br /> reliable customer</h1>
          <h6>Save your self hours and get your to-do list <br /> completed</h6>
          <p> <div className='home-section-7-nums'>1</div> Easy access cleint tasks and projects</p>
          <p> <div className='home-section-7-nums'>2</div> Direct booking and secure payments</p>
          <p> <div className='home-section-7-nums'>3</div> Tools to ensure service quality</p>
          <button>Become a client</button>
        </div>
        <div className='home-section-7-bg-img'>
          <div className='home-section-7-card-1'>
            <img src={Ellipse} alt='' width={70} />
            <div className='home-section-7-container-1-box'>
              <div className='home-section-7-box-1'>
                <h6 style={{ margin: '0px' }}>Wade Warren</h6>
                <div>
                  <span><TimerOutlined className='ic' /></span>
                  <span>08:00 AM</span>
                </div>
                <div>
                  <span><TimerOutlined className='ic' /></span>
                  <span>30 ,  2024</span>
                </div>
              </div>
              <div className='home-section-7-box-2'>
                <img src={arrowforward} alt='' width={30} />
                <h6 style={{ color: 'green' }}>$ 20,000.00</h6>
              </div>
            </div>
          </div>
          <div className='home-section-7-card-2'>
            <img src={Frame2} alt='' width={70} />
            <h6 style={{ margin: '0px' }}>Muhammad Abdullahi</h6>
            <span style={{ margin: '0px', color: 'gray' }}>Customer</span>
            <div>
              <span><Star id="ic" style={{ margin: '0px', color: 'gold' }} /></span>
              <span><Star id="ic" style={{ margin: '0px', color: 'gold' }} /></span>
              <span><Star id="ic" style={{ margin: '0px', color: 'gold' }} /></span>
              <span style={{ margin: '0px', fontWeight: 'bold' }}> 4.4</span>
              <span>( 120+ review )</span>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section-8'>
        <div className='home-section-8-bg-img'>
          <div className='home-section-6-card-1'>
            <div className='home-s6-b'>
              <div className='home-s6-box'>
                <img src={Ellipse} alt='' width={40} height={40} className='home-section-6-card-1-img' />
                <div className='col'>
                  <h6>Jacob jones</h6>
                  <div className='home-section-6-icon-list'>
                    <AvTimer className='ic' />
                    <AddModeratorOutlined className='ic' />
                    <AccountBalanceWalletOutlined className='ic' />
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <img src={workspace} alt='' style={{ float: 'right' }} />
              </div>
            </div>
            <div className='home-s6-box-info'>
              <p style={{ color: 'grey', margin: '-5px', }}>
                <Person2Outlined id='home-s6-ic' style={{ color: 'black' }} /> Electricion
              </p>
              <p style={{ margin: '-5px' }}>
                <StarHalf id='home-s6-ic' style={{ color: 'gold', margin: '0px' }} />
                4.9 (40+ Rating)
              </p>
              <div>
                <span style={{ color: '#FE4C00', fontWeight: "bold", margin: '-5px' }}>
                  Active
                </span>
                <span style={{ lineBreak: '0' }}>
                  -1 offer
                </span>
              </div>
            </div>
          </div>

          <div className='home-section-6-card-2'>
            <div className='home-section-6-card-2-box'>
              <img src={Frame} alt='' />
              <div style={{ marginTop: "10px" }}>
                <h6 style={{ lineHeight: '0' }}>Jacob</h6>
                <p style={{ margin: '0', color: 'grey' }}>
                  ***1258
                </p>
              </div>
            </div>
            <div className='home-section-6-card-2-vector'>
              <img src={Vector} alt='' />
            </div>
          </div>
        </div>
        <div className='home-section-8-container-1'>
          <h1>Pay for service <br /> security and reliably</h1>
          <h6>With our integration with Waafi, a leading payment <br />
            gateway provider in somalia, you can send <br />
            money in-app before
          </h6>
          <button>Become a client</button>
        </div>
      </div>
      <div className='home-section-9'>
        <h2>What our customer <br />
          say about the worker
        </h2>
        <h6>these are the review that our customers says about <bt />
          the service we offers them
        </h6>
        <div className='home-section-9-container'>
          <div className='home-section-9-card'>
            <img src={Frame3} alt='' />
            <div className='home-section-9-card-box'>
              <div className='home-section-9-card-box-header'>
                <h6>Jawariya ahmed</h6>
                <div>
                  <span><Star style={{ margin: '0px', color: 'gold' }} /></span>
                  <span style={{ fontWeight: 'bold' }}>4.8</span>
                </div>
              </div>
              <p>"A... for Hassan! I was left in quite a dilemma
                with a shower leak. and he was there within the
                hour, Highly professional, punctual and he did it
                all with a friedly smile."
              </p>
              <p>-  Jaweriya ahmed</p>
            </div>
          </div>
          <div className='home-section-9-card'>
            <img src={Frame3} alt='' />
            <div className='home-section-9-card-box'>
              <div className='home-section-9-card-box-header'>
                <h6>Jawariya ahmed</h6>
                <div>
                  <span><Star style={{ margin: '0px', color: 'gold' }} /></span>
                  <span style={{ fontWeight: 'bold' }}>4.8</span>
                </div>
              </div>
              <p>"A... for Hassan! I was left in quite a dilemma
                with a shower leak. and he was there within the
                hour, Highly professional, punctual and he did it
                all with a friedly smile."
              </p>
              <p>-  Jaweriya ahmed</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section-10'>
        <div className='home-section-10-header'>
          <h2 style={{ fontWeight: 'bolder' }}>Blog & articles <br /> & Artilces</h2>
          <Link to="/Blog"><button>See more</button></Link>
        </div>
        <div className='home-section-10-lists'>
          {similar.map((item) => (
            <div className='home-section-10-box'>
              <div className='home-section-10-list-img1'>
                <img src={`https://back-end-for-xirfadsan.onrender.com/api/blog/image/${item.id}`} alt='' />
              </div>
              <div className='home-section-10-lists-box'>
                <h4>{item.title}</h4>
                <p>{item.blog}</p>
                <Link to={`/Blogarticles/${item.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Home