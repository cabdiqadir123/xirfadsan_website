import React, { useState, useEffect } from 'react'
import service_bg from '../assets/images/service page bg.png'

import small_icon from '../assets/icon/image 17.png'
import medium_icon from '../assets/icon/image 17 (1).png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

function Services() {
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
        {/* Cards */}
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
                zIndex: idx === current ? 10 : 1, // bring focused card to front
              }}
            >
              <div
                className={`rounded-2xl p-6 text-center shadow-md transition-all duration-300 ${idx === current ? "text-white" : "bg-white text-black"
                  }`}
                style={{
                  backgroundColor: idx === current ? "#FE4D01" : "white",
                }}
              >
                {/* Category */}
                <h6
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${idx === current ? "bg-yellow-400 text-black" : "bg-yellow-200 text-black"
                    }`}
                >
                  {item.category || "Service"}
                </h6>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug whitespace-pre-line">
                  {item.name}
                </h3>

                {/* SVG Icon */}
                <div className="flex justify-center my-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${idx === current ? "text-white border-2 border-white rounded-full p-2" : "text-black"
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

                {/* Description */}
                <p className={`text-sm ${idx === current ? "text-white" : "text-gray-600"}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
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

  // Fetch services from backend
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

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  return (
    <div className='page'>
      <div className='ser-section-1'>
        <h1>
          We are revoluationising <br /> the future of work
        </h1>
      </div>
      <div className='ser-section-2'>
        <div className='ser-section-2-img'>
          <img src={service_bg} alt='' />
        </div>
        <div className='ser-section-2-list'>
          <div className='ser-section-2-list-box'>
            <h1>11M+</h1>
            <p>customer <br /> in Rukun</p>
          </div>
          <div className='ser-section-2-list-box'>
            <h1>450</h1>
            <p>Employee<br /> in Rukun</p>
          </div>
          <div className='ser-section-2-list-box'>
            <h1>018</h1>
            <p>status <br /> in Rukun</p>
          </div>
          <div className='ser-section-2-list-box'>
            <h1>2023</h1>
            <p>Founding <br /> in Rukun</p>
          </div>
        </div>
      </div>
      <div className='ser-section-3'>
        <h1>Life at Rukun</h1>
        <p>At Rukun Company, our mission is to make home services more accessible,
          reliable, and affordable. We aim to connect our community with skilled
          professionals who get the job done right the first time.
          If a worker makes a mistake, we take full responsibility to ensure the.
        </p>
      </div>
      <div className='ser-section-4'>
        <div className='ser-section-4-container'>
          <div className='ser-section-4-container-1'>
            <h1>Three good reasons <br /> to join our team</h1>
            <p>
              Rukun Company is more than just a home service provider – <br></br>
              we are a team of dedicated experts committed to delivering.
            </p>
          </div>
          <div className='ser-section-4-container-2'>
            <div className='ser-section-4-box'>
              <h1>1</h1>
              <h2>Quality</h2>
              <p>Get 10% commision every project you booked</p>
            </div>
            <div className='ser-section-4-box'>
              <h1>2</h1>
              <h2>Quality</h2>
              <p>Get 10% commision every project you booked</p>
            </div>
            <div className='ser-section-4-box'>
              <h1>3</h1>
              <h2>Quality</h2>
              <p>Get 10% commision every project you booked</p>
            </div>
          </div>
          <div className='ser-section-4-container-3'>
            <button>Join us</button>
          </div>
        </div>
      </div>
      <div className='ser-section-5'>
        <h2>The numbers don't lie</h2>
        <div className='ser-section-5-container'>
          <div className='ser-section-5-box'>
            <div className='ser-section-2-list-box'>
              <h1>11M+</h1>
              <p>customer <br /> in Rukun</p>
            </div>
            <p>Get 10% commision every project you booked</p>
          </div>
          <div id='ser-section-5-box-2' className='ser-section-5-box'>
            <div className='ser-section-2-list-box'>
              <h1>450</h1>
              <p>Employee<br /> in Rukun</p>
            </div>
            <p>Get 10% commision every project you booked</p>
          </div>
          <div id='ser-section-5-box-3' className='ser-section-5-box'>
            <div className='ser-section-2-list-box'>
              <h1>018</h1>
              <p>status <br /> in Rukun</p>
            </div>
            <p>Get 10% commision every project you booked</p>
          </div>
          <div className='ser-section-5-box'>
            <div className='ser-section-2-list-box'>
              <h1>2023</h1>
              <p>Founding <br /> in Rukun</p>
            </div>
            <p>Get 10% commision every project you booked</p>
          </div>
        </div>
      </div>
      <div className='ser-section-6'>
        <h1>Services we offers</h1>
        <div className=" flex items-center justify-center ">
          <CardCarousel items={services} />
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

export default Services