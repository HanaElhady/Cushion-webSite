import './Footer.css'
import React from 'react'
import {Link} from "react-router-dom"
import '../navBar/NavBar.css'
import logo from '../../img/transparentLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import {Link as ScrollLink } from 'react-scroll'


export default function Footer({isPage}) {
  return (
        <div className='navBar' style = {{
            backgroundColor : "#b08ead",
            position :"relative"
        }}>
            <div className="adjust">
            <div className="navLogo">
                <img src ={logo} alt='logo'/>
            </div>
            <div className="nav-bar-link nav-bar-link-adjust" >
              {isPage ? (
        <Link to="/#navBarSection">Home</Link>
      ) : (
        <ScrollLink to="navBarSection" smooth={true} duration={1000} >
          Home
        </ScrollLink>
      )}

       {isPage ? (
        <Link to="/#aboutSection">About</Link>
      ) : (
        <ScrollLink to="aboutSection" smooth={true} duration={1000} >
          About
        </ScrollLink>
      )}

         {isPage ? (
        <ScrollLink to ='ProductsSectionPage' smooth ={true} duration = {1000}>Products</ScrollLink>
      ) : (
        <Link to="/Products">Products</Link>

      )}
              {isPage ? (
        <Link to="/#contactSection">Contact me</Link>
      ) : (
        <ScrollLink to="contactSection" smooth={true} duration={1000}style = {{
            color:"white"
       }}>
          Contact me
        </ScrollLink>
      )}
      </div>
            </div>
            <div className='media'>
                <div className="circle circleAdjustement">
                <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="circle circleAdjustement">
                <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="circle circleAdjustement">
                <FontAwesomeIcon icon={faTwitter} />
                </div>
                <ScrollLink to= 'navBarSection' smooth ={true} duration ={1000} >
                <div className="square">
                <div>&#10148;</div>
                </div>
                </ScrollLink>
                </div>
            
    
        </div>
      )
    }