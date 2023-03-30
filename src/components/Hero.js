import React from 'react'
import TypeWriter from 'typewriter-effect'
import Heroimage from '../images/background.jpg'
import CV from '../assets/resume.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    const imgStyle = {
        // margin:'50px',
        clipPath: 'circle(50% at 50% 50%)',
    };
    return (
        <div id="hero" className="container">
            <div className="hero_left">
                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://www.facebook.com/mukeshkumar.sahu.969300" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li className="link_item"><a href="https://www.instagram.com/mukesh_tulsi/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li className="link_item"><a href="https://github.com/iasmks" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://twitter.com/TulsiMukesh" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li className="link_item"><a href="https://www.linkedin.com/in/mukesh-kumar-sah-9a1a02165/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    </ul>


                </div>

                <p className="name">Mukesh Kumar</p>
                <p className="title"><span class="title_span">I'm a  </span>
                    <TypeWriter
                        options={{
                            strings: ['Developer','Programmer'],
                            autoStart: true,
                            delay:60,
                            loop: true,
                        }}
                    />
                </p>
                <div className="hero_btns">
                    <p className="cv_download"><a target="_blank" rel="noreferrer" href={CV}>Download CV <span><i className="fa fa-download" aria-hidden="true"></i></span></a></p>
                    <p className="hire_btn">
                        <Link to="contact">Hire Me</Link>
                    </p>
                </div>
            </div>
            <div className="hero_right">
                <img src={Heroimage} alt="profile_image"  style={imgStyle}/>
            </div>
        </div>
    )
}

export default Hero

