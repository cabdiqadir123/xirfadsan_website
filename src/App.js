import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './Css/Navbar.css'
import './Css/page.css'
import './Css/Home.css'
import './Css/blog.css'
import './Css/about.css'
import './Css/services.css'
import './Css/footer.css'
import './Css/blogarticles.css'
import './Css/contact.css'
import './Css/delete.css'
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blogarticles from './Pages/Blogarticles';
import ScrollToTop from "./Pages/ScrollToTop";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from './Pages/Terms'
import Deleteacount from './Pages/Deleteacount'

function App() {
  return (
    <div className='page_container'>
      <div className='content'>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Home' Component={Home} />
            <Route path='/PrivacyPolicy' Component={PrivacyPolicy} />
            <Route path='/Terms' Component={Terms} />
            <Route path='/Deleteacount' Component={Deleteacount} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App