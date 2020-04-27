import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Skeleton from 'react-loading-skeleton';

import dataAboutme from '../dataaboutme.json';


/* Importa images */
import Icon from "../assets/blue-dots.svg";

import webDevelopment from '../images/web-development.png'
import webDesign from '../images/web-design.png'
import uxUi from '../images/ux-ui.png'
import seo from '../images/seo.png'

const Aboutme = () => {
    return (
        
        <div className="SectionAboutme greyBack">
            <div className="outerDotsBox">
                <div className="dotsBox">
                    <Icon />
                </div>
            </div>

            <div className="contain">
            <div className="leftAboutme">

                <ul className="card-list">  

                    <li className="card">
                        <AniLink to="/" hex="#5c6ac4" className="card-image" style={{backgroundImage: `url(${webDevelopment})`, backgroundSize: '50px' }}>
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
                I'm a Front-End web developer. I have 25 years with over 3+ years of work experience. I can create any type of website Business, E-commerce, Portfolio, Dating, Personal Blog, and so many more...<br />
                I know the importance of on-line Business and assure prompt Response, 24/7 Availability, On-time Delivery, Fast Turn Around, Unlimited Revisions, and excellent communication provide me a chance. so, I can fulfill your requirements.<br />
                I love connecting brands and companies with their customers through good design. My passion is user experience and creating real business value. I want to work with you on improving your business by creating software that works for you.                
                <br /><br />I am seeking for a long-term cooperation with the customer and striving my best to fulfill the requirement of every customer.                      
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/yassine-irab/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.behance.net/yassineirab" target="_blank"><i className="fa fa-behance-square"></i></a>
                    <a href="https://github.com/Yassine-irab" target="_blank"><i className="fa fa-github-square"></i></a>
                </p>
                </div>              
            </div>
            </div>      
            </div>

    )
}

export default Aboutme