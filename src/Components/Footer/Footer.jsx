import React, {useEffect} from 'react'
import './footer.css'
import './footer.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import video2 from '../../Assets/video/video2.mp4'
const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
   }, {})
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src= {video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email 
            Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
           <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'> Travel.
              <MdOutlineTravelExplore className="icon"/>
              </a>
            </div>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod delectus ipsam porro, vitae in libero iste illo eligendi id voluptate? Hic, consequuntur labore cum facilis unde ducimus commodi maiores.

            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>


            </div>
           

           <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Services
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Insurance
              </li>

                
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>

            <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

                
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                
                hostelworld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Tripadvisor
              </li>
            </div>

            <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                London
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                California
              </li>

                
              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Indonesia
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className='footerList flex'>
                <FiChevronRight className="icon"/>
                Oceania
              </li>
            </div>
           </div>

           <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESEVERED 6 ISRATECH 2022 </small>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
