import React, { useEffect, useState } from 'react'
import blogimg from '../assets/images/Frame 34849.png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

import Right from '../assets/icon/Right.png'
import { Link, useParams } from 'react-router-dom'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
function Blogarticles() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [similar, setSimilar] = useState([]);

    // Fetch single article
    useEffect(() => {
        fetch(`https://back-end-for-xirfadsan.onrender.com/api/blog/all/${id}`)
            .then((res) => res.json())
            .then((data) => setArticle(data))
            .catch((err) => console.error(err));
    }, [id]);

    // Fetch similar blogs
    useEffect(() => {
        fetch(`https://back-end-for-xirfadsan.onrender.com/api/blog/all`)
            .then((res) => res.json())
            .then((data) => {
                // Exclude the current one
                const filtered = data.filter((b) => b.id.toString() !== id);
                setSimilar(filtered); // limit to 3
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!article) return <h2>Loading...</h2>;
    return (
        <div className='page'>
            <div className='blogarticles-section-1'>
                <div className='blog-section-1-header'>
                    <Link to="/Blog" className='blog-section-1-header-link'><img src={Right} alt='' /></Link>
                    {article.map((item) => (
                        <h1>{item.title}</h1>
                    ))}
                </div>
                <div className='blog-articles-1-img'>
                    <img src={`https://back-end-for-xirfadsan.onrender.com/api/blog/image/${id}`} alt='' />
                </div>
            </div>
            <div className='blogarticles-section-2'>
                <div className='blogarticles-section-2-col-1'>
                    <h3>Follow us on:</h3>
                    <div className='blogarticles-section-2-socialmedia'>
                        <div className='blogarticles-section-2-sm'>
                            <TbBrandFacebook />
                        </div>
                        <div className='blogarticles-section-2-sm'>
                            <TbBrandLinkedin />
                        </div>
                        <div className='blogarticles-section-2-sm'>
                            <TbBrandTwitter />
                        </div>
                        <div className='blogarticles-section-2-sm'>
                            <TbBrandInstagram />
                        </div>
                    </div>
                </div>
                <div className='blogarticles-section-2-col-2'>
                    {article.map((item) => (
                        <p>{item.blog}</p>
                    ))}
                </div>
            </div>
            <div className='home-section-10'>
                <div className='home-section-10-header'>
                    <h2 style={{ fontWeight: 'bolder' }}>Similar Blog <br /> & Artilces</h2>
                    <Link to="/Blog"><button>View Other blog</button></Link>
                </div>
                <div className='home-section-10-lists'>
                    {similar.map((item) => (
                        <div className='home-section-10-box'>
                            <div className='home-section-10-list-img1'>
                                <img src={`https://back-end-for-xirfadsan.onrender.com/api/blog/image/${item.id}`} alt='' />
                            </div>
                            <div className='home-section-10-lists-box'>
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
                    <br />
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

export default Blogarticles