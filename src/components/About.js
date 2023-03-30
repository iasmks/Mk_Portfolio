import React from 'react'
import '../styles.css'
import AboutImg from '../images/aboutim.jpg'
const About = () => {
   const animation = {
       animation:'left-right 2s infinite linear',
   }
   const imgabout = {
    clipPath: 'circle(50% at 50% 50%)',
    // margin:'50px',
   }
    return (
        <section id="about">
            <div className="container about_me">
            <div data-aos="fade-right" className="about_top">
                <h1>About Me</h1>
                <p>I am Mukesh Kumar , Full Stack Developer, I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.!
                </p>
                <div className="line"></div>
            </div>
            <div className="about_bottom">
                <div data-aos="fade-right" className="about_bottom_left">
                    <img src={AboutImg} style={imgabout} alt="about_image" />
                </div>
                <div data-aos="fade-left" className="about_bottom_right">
                    <h2>Web Developer</h2>
                    <div className="about_details">
                        <div className="about_details_left">
                            
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true" style={animation}></i>Phone: </span>+91 8581082579</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true" style={animation}></i>City: </span>Bhopal, Madhya Pradesh</p>
                        </div>
                        <div className="about_details_right">
                            
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true" style={animation}></i>Degree: </span>Master Of Computer Application(MCA)</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true" style={animation}></i>Email: </span> 348kumarmukesh@gmail.com</p>
                           
                        </div>
                    </div>
                    <p>Developing as well as real World related 
                        technology.I like to build applications that will solve real life problems
                        for making the world easier.
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About
