import React, { useEffect, useState } from 'react'
import playstore from '../assets/icon/playstore_100px.png'
import { AccountBalanceWalletOutlined, AddModeratorOutlined, AvTimer, CalendarMonth, Person2Outlined, Schedule, Star, StarHalf, TimerOutlined, WorkspacesSharp } from '@mui/icons-material'
import { TbClockRecord } from 'react-icons/tb'
import Hs_img1 from '../assets/images/phone.jpeg'
import dots from '../assets/images/dots.png'
import logo from "../assets/logo/logo.png";

import Img1 from '../assets/images/img1.jpeg';
import Img2 from '../assets/images/img3.jpeg';
import Img3 from '../assets/images/img4.jpeg';
import Img4 from '../assets/images/img5.jpeg';
import Img5 from '../assets/images/img6.jpeg';
import Img6 from '../assets/images/img7.jpeg';

import psicon from '../assets/images/psicon.png'
import apsicon from '../assets/images/apsicon.png'

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
import { useLocation } from 'react-router-dom'

function Home() {
  const [similar, setSimilar] = useState([]);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const styles = { color: "#FE4C00" };
  const style2 = { color: "black" };

  useEffect(() => {
    fetch(`https://back-end-for-xirfadsan.onrender.com/api/blog/all`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data;
        setSimilar(filtered.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  const CardCarousel = ({ items }) => {
    const [current, setCurrent] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [cardsPerView, setCardsPerView] = useState(1);

    useEffect(() => {
      const updateCardsPerView = () => {
        const width = window.innerWidth;
        if (width >= 1280) setCardsPerView(5);
        else if (width >= 1024) setCardsPerView(4);
        else if (width >= 768) setCardsPerView(3);
        else if (width >= 640) setCardsPerView(2);
        else setCardsPerView(1);
      };
      updateCardsPerView();
      window.addEventListener("resize", updateCardsPerView);
      return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    const prev = () =>
      setCurrent((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    const next = () =>
      setCurrent((curr) => (curr === items.length - 1 ? 0 : curr + 1));

    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchMove = (e) => {
      if (!touchStart) return;
      const touchEnd = e.touches[0].clientX;
      const diff = touchStart - touchEnd;
      if (diff > 50) {
        next();
        setTouchStart(null);
      } else if (diff < -50) {
        prev();
        setTouchStart(null);
      }
    };

    const translateX = () => {
      const cardWidthPercent = 100 / cardsPerView;
      const centerOffset = (cardsPerView - 1) / 2;
      return Math.min(
        Math.max(0, current - centerOffset) * cardWidthPercent,
        (items.length - cardsPerView) * cardWidthPercent
      );
    };

    return (
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${translateX()}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {items.map((item, idx) => (
            <div
              key={item.service_id || idx}
              className="flex-shrink-0 px-4 transition-transform duration-300"
              style={{
                width: `${100 / cardsPerView}%`,
                transform: idx === current ? "scale(1)" : "scale(0.85)",
                zIndex: idx === current ? 10 : 1,
              }}
            >
              <div
                className={`rounded-2xl p-6 text-center shadow-md transition-all duration-300 ${idx === current ? "text-white" : "bg-white text-black"
                  }`}
                style={{
                  backgroundColor: idx === current ? "#FE4D01" : "white",
                }}
              >
                <h6
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${idx === current ? "bg-yellow-400 text-black" : "bg-yellow-200 text-black"
                    }`}
                >
                  {item.category || "Service"}
                </h6>
                <h3 className="text-lg font-bold leading-snug whitespace-pre-line">
                  {item.name}
                </h3>
                <div className="flex justify-center my-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${idx === current ? "text-white border-2 border-white rounded-full p-2" : "text-black border-2 border-black rounded-full p-2"
                      }`}
                    dangerouslySetInnerHTML={{
                      __html: item.image
                        ? item.image
                          .replace(/fill="[^"]*"/g, 'fill="currentColor"')
                          .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
                        : "",
                    }}
                  />
                </div>
                <p className={`text-sm ${idx === current ? "text-white" : "text-gray-600"}`}>
                  Full-time, every day we are ready
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200"
          >
            →
          </button>
        </div>
      </div>
    );
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch_service = async () => {
    try {
      const response = await fetch(
        "https://back-end-for-xirfadsan.onrender.com/api/services/all"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch_service();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.querySelector(`.${location.state.scrollTo === 'home' ? 'h-s1' : location.state.scrollTo === 'about' ? 'home-section-2-container' : location.state.scrollTo === 'services' ? 'ser-section-6' : 'home-section-9'}`);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className='page'>
      {/* Navbar */}

      {/* Home Section */}
      <div className='h-s1'>
        <h1>Get Fastest Handyman <br /> Service in Somalia</h1>
        <p>
          From leaky faucets to full renovations, we handle it all with expertise <br />
          and care. Your home or office is in good hands.
        </p>
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

      {/* About Section */}
      <div className='home-section-2'>
        <div className='home-section-2-dots'>
          <img src={dots} alt='' />
        </div>
        <div className='home-section-2-container'>
          <div className='h-section-box-1'>
            <h1>About us</h1>
            <div className='hsection-box-2'>
              <p>
                Xirfadsan is a modern company offering
                a variety of on-demand services, easily
                bookable at your preferred time and
                location. We strive to deliver fast and
                reliable services you can trust.
              </p>
            </div>
            <button>Contact us</button>
          </div>
          <div className='home-section-2-img'>
            <img src={Hs_img1} alt='' />
          </div>
          <div className='h-section-box-2'>
            <h4><WorkspacesSharp /> Top-Rated <br />
              Handyman Services</h4>
            <h4><TbClockRecord className='h-section-box-2-icon' />Booking History <br />
              & Tracking</h4>
            <h4><Schedule /> Easy Scheduling &  <br />
              Customer Support</h4>
          </div>
        </div>
      </div>

      {/* Home Section 4 */}
      <div className='home-section-4'>
        <div className='home-section-4-container-1'>
          <h1>Instangly submit your <br /> first task</h1>
          <h6>Save your self hours and get your to-do list <br /> completed</h6>
          <p> <div className='home-section-4-nums'>1</div> Quickly schedule your service in just a few steps.</p>
          <p> <div className='home-section-4-nums'>2</div> Get the best workers of somalia.</p>
          <p> <div className='home-section-4-nums'>3</div> Receive 24/7 customer services.</p>
          <button>Become a client</button>
        </div>
        <div className='home-section-4-container-2'>
          {[Img1, Img5, Img6, Img4].map((img, idx) => (
            <div className='home-section-4-card' key={idx}>
              <img src={img} alt='' />
              <div className='home-section-4-card-box'>
                <h6>Service {idx + 1}</h6>
                <div className='home-section-4-card-box-tb'>
                  <div className='home-section-4-box-tb-icon'>
                    <CalendarMonth />
                    <BsClock />
                  </div>
                  <div className='home-section-4-box-tb-date'>
                    <span style={{ marginTop: '3px' }}> 30 may, 2024</span>
                    <span style={{ marginTop: '-1px' }}> 09:00 AM -10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className='ser-section-6'>
        <h1>Services we offers</h1>
        <div className=" flex items-center justify-center ">
          <CardCarousel items={services} />
        </div>
      </div>

      {/* Home Section 6 */}
      <div className='home-section-6'>
        <div className='home-section-6-bg-img'></div>
        <div className='home-section-6-container-1'>
          <h1>Get Reliable Work with <br /> Secure Payments</h1>
          <h6>Pay securely and conveniently through our mobile app once <br />
            the job is done.</h6>
          <p> <div className='home-section-6-nums'>1</div> Trusted Professionals</p>
          <p> <div className='home-section-6-nums'>2</div> Pay effortlessly through our app using supported mobile payment methods.</p>
          <p> <div className='home-section-6-nums'>3</div> Offers guidance for informed decision-making</p>
          <button>Become a client</button>
        </div>
      </div>

      {/* Testimonials */}
      <div className='home-section-9'>
        <h2>What our customer <br /> say about the worker</h2>
        <h6>these are the review that our customers says about <br /> the service we offers them</h6>
        <div className='home-section-9-container'>
          {[{
            name: "Jawariya ahmed", rating: 4.8, text: "“ Xirfadsan made fixing my home so easy and stress- free.The handyman was professional,punctual, and highly skilled.I will definitely use their services again! ”" }, 
            {name: "Fadumo Hassan", rating: 4.8,text:"“ I love how simple it is to book a service through Xirfadsan’s app. The work was done efficiently and the payment process was smooth and secure.Highly recommended! ”" }].map((item, idx) => (
          <div className='home-section-9-card' key={idx}>
            <img src={Frame3} alt='' />
            <div className='home-section-9-card-box'>
              <div className='home-section-9-card-box-header'>
                <h6>{item.name}</h6>
                <div>
                  <span><Star style={{ margin: '0px', color: 'gold' }} /></span>
                  <span style={{ fontWeight: 'bold' }}>{item.rating}</span>
                </div>
              </div>
              <p>{item.text}</p>
              <p>- {item.name}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
