import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Skeleton from 'react-loading-skeleton';

import dataAboutme from '../dataaboutme.json';


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
                        <AniLink to="/" hex="#5c6ac4" className="card-image" style={{backgroundImage: `url(${webDevelopment})`, backgroundSize: '50px' }}>
                            <img src="images/web-development.png" alt="html skills" />
                        </AniLink>
                        <AniLink to="/" hex="#5c6ac4" className="card-description" href="#">
                        <h2>{dataAboutme.developementcardtitle || <Skeleton />}</h2>
                        </AniLink>
                        <div className="card-description">
                        <p>
                            {dataAboutme.developementcarddescription || <Skeleton />}
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <AniLink to="/" hex="#5c6ac4" className="card-image" href="#" style={{backgroundImage: `url(${webDesign})`, backgroundSize: '50px' }}>
                            <img src="images/web-design.png" alt="css skills" />
                        </AniLink>
                        <AniLink to="/" hex="#5c6ac4" className="card-description" href="#">
                        <h2>{dataAboutme.webdesigncardtitle || <Skeleton />}</h2>
                        </AniLink>
                        <div className="card-description">
                        <p>
                            {dataAboutme.webdesigncarddescription || <Skeleton />}
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <AniLink to="/" hex="#5c6ac4" className="card-image" href="#" style={{backgroundImage: `url(${uxUi})`, backgroundSize: '50px' }}>
                            <img src="images/ux-ui.png" alt="bootstrap skills" />
                        </AniLink>
                        <AniLink to="/" hex="#5c6ac4" className="card-description" href="#">
                        <h2>{dataAboutme.ergonomicscardtitle || <Skeleton />}</h2>
                        </AniLink>
                        <div className="card-description">
                        <p>
                            {dataAboutme.Ergonomicscarddescription || <Skeleton />}
                        </p>
                        </div>
                    </li>

                    <li className="card">
                        <AniLink to="/" hex="#5c6ac4" className="card-image" href="#" style={{backgroundImage: `url(${seo})`, backgroundSize: '50px'}}>
                            <img src="images/seo.png" alt="Photoshop skills" />
                        </AniLink>
                        <AniLink to="/" hex="#5c6ac4" className="card-description" href="#">
                        <h2>{dataAboutme.seocardtitle || <Skeleton />}</h2>
                        </AniLink>
                        <div className="card-description">
                        <p>
                            {dataAboutme.seocarddescription || <Skeleton />}
                        </p>
                        </div>
                    </li>
            </ul>  

            </div>
            <div className="rightAboutme">
                <h2>About me</h2>
                <div className="bodytextAbout">
                <p>
                    I'm <AniLink to="/" hex="#5c6ac4" href="about">yassine irab</AniLink> a front end web developer living in mrocco. Ihave 23 years with over 2 years of work experience
                    Fluent in HTML/ CSS/ Boostrap/ Photoshop/ Adobe XD. -- <AniLink to="/" hex="#5c6ac4" href="portfolio">My Work</AniLink>.
                    My passion is user experience and creating real business value. I want to work with you on improving your business by creating software that works for you.                      
                </p>
                <AniLink to="/" hex="#5c6ac4" href="/" className="btn" title="My Resume" download="Work/cv.rar">
                        
                <i className="fa fa-download"></i> Download Cv
                
                </AniLink>
                </div>
                </div>
            </div>      
            </div>

    )
}

export default Aboutme