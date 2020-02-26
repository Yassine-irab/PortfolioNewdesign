import React from 'react';

/* Importa images */
import webDevelopment from '../images/web-development.png'
import webDesign from '../images/web-design.png'
import uxUi from '../images/ux-ui.png'
import seo from '../images/seo.png'

const Aboutme = () => {
    return (
        
        <div className="SectionAboutme greyBack">
            <div className="contain">
            <div className="leftAboutme">

                <ul className="card-list">  

                    <li className="card">
                        <a className="card-image" href="#" style={{backgroundImage: `url(${webDevelopment})`, backgroundSize: '50px' }}>
                            <img src="images/web-development.png" alt="html skills" />
                        </a>
                        <a className="card-description" href="#">
                        <h2>Development</h2>
                        </a>
                        <div className="card-description">
                        <p>
                            Development of websites under WordPress, and front end frameworks
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <a className="card-image" href="#" style={{backgroundImage: `url(${webDesign})`, backgroundSize: '50px' }}>
                            <img src="images/web-design.png" alt="css skills" />
                        </a>
                        <a className="card-description" href="#">
                        <h2>Web design</h2>
                        </a>
                        <div className="card-description">
                        <p>
                            Creation of unique, creative designs, adapted to different media
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <a className="card-image" href="#" style={{backgroundImage: `url(${uxUi})`, backgroundSize: '50px' }}>
                            <img src="images/ux-ui.png" alt="bootstrap skills" />
                        </a>
                        <a className="card-description" href="#">
                        <h2>Ergonomics</h2>
                        </a>
                        <div className="card-description">
                        <p>
                            Creation of interfaces designed to optimize the user experience
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <a className="card-image" href="#" style={{backgroundImage: `url(${seo})`, backgroundSize: '50px'}}>
                            <img src="images/seo.png" alt="Photoshop skills" />
                        </a>
                        <a className="card-description" href="#">
                        <h2>SEO</h2>
                        </a>
                        <div className="card-description">
                        <p>
                            Optimization of the code and content of your website
                        </p>
                        </div>
                    </li>
            </ul>  

            </div>
            <div className="rightAboutme">
                <h2>About me</h2>
                <div className="bodytextAbout">
                <p>
                    I'm <a href="about">yassine irab</a> a front end web developer living in mrocco. Ihave 23 years with over 2 years of work experience
                    Fluent in HTML/ CSS/ Boostrap/ Photoshop/ Adobe XD. -- <a href="portfolio">My Work</a>.
                    My passion is user experience and creating real business value. I want to work with you on improving your business by creating software that works for you.                      
                </p>
                <a href="/" className="btn" title="My Resume" download="Work/cv.rar">
                        
                    Download Cv
                
                </a>
                </div>
                </div>
            </div>      
            </div>

    )
}

export default Aboutme