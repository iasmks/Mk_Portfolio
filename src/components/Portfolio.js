import React from 'react'
import p1 from '../images/ytclone.jpg';
import p2 from '../images/coching.JPG';
import p3 from '../images/netflix.jpg';
import p5 from '../images/todo.jpg';
import p7 from '../images/3d.jpg';
import p8 from '../images/contact.jpg';

const Portfolio = () => {
    const projects = [

       
        {
            name: "Youtube Clone",
            img: p1,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://iasmks.github.io/youtubeclone/"
        },
        {
            name: "My Coching Website",
            img: p2,
            languageOrFramwork: "React Js, Bootstrap,CSS",
            link: "https://coching.vercel.app/"
        },
      
        {
            name: "Netflix Clone Static",
            img: p3,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://iasmks.github.io/netflixclone/"
        },
        {
            name: "3D Carousel (All Project Mention Link)",
            img: p7,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://iasmks.github.io/3dcarouselportfolio/"
        },
        {
            name: "Contact Form Email Service (Working)",
            img: p8,
            languageOrFramwork: "JavaScript, HTML, CSS",
            link: "https://iasmks.github.io/3dcarouselportfolio/contact.html"
        },
        {
            name: "Todo Add and Delete",
            img: p5,
            languageOrFramwork: "React Js, CSS",
            link: "https://mukeshtodo.herokuapp.com/"
        },
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
            <h1 data-aos="fade-left"><br></br></h1>
                <h1 data-aos="fade-left">Portfolio</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>{index === 0 ? 'Hosted Url' : 'Hosted Url'}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Portfolio
