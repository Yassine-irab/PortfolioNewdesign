import React from 'react';
import { Link } from 'gatsby'

/* Importa images */
import image1 from '../images/images1.jpg'
import abstract from '../images/abstract.jpg'
import backskills from '../images/backskills.jpg'
import bqstr from '../images/bqstr.jpg'
import christianGirl from '../images/christianGirl.jpg'


const Blogsection = () => {
    return (

        <div className="SectionBlog">
            <div className="contain">
                <div className="leftBlog">

                    <h2>Blog</h2>
                    <p>Publish what you think, don't put it on social media, Pofo provides a large collection of home and inner pages, carefully crafted elements, and easily customizable templates.</p>
                    <Link to="/"className="btn" title="Blog">Discover more</Link>

                </div>
                <div className="rightBlog">
                    <ul className="card-list">

                        <li className="card">
                            <a className="card-image" href="#" style={{backgroundImage: `url(${image1})` }}>
                                <img src="images/images1.jpg" alt="html skills" />
                            </a>
                            <a className="card-description" href="#">
                                <h2>I find modernist design boring, but it so muc faster!</h2>
                            </a>
                            <div className="card-description">
                                <p>
                                    It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.
                                </p>
                            </div>
                        </li>

                        <li className="card">
                            <a className="card-image" href="#" style={{backgroundImage: `url(${abstract})` }}>
                                <img src="images/mountains.jpg" alt="html skills" />
                            </a>
                            <a className="card-description" href="#">
                                <h2>Designers are meant to be loved, not to ...</h2>
                            </a>
                            <div className="card-description">
                                <p>
                                    It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.
                                </p>
                            </div>
                        </li>

                        <li className="card">
                            <a className="card-image" href="#" style={{backgroundImage: `url(${backskills})` }}>
                                <img src="images/bqstr.jpg" alt="html skills" />
                            </a>
                            <a className="card-description" href="#">
                                <h2>famous designer is like being a famous</h2>
                            </a>
                            <div className="card-description">
                                <p>
                                    It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.
                                </p>
                            </div>
                        </li>

                        <li className="card">
                            <a className="card-image" href="#" style={{backgroundImage: `url(${bqstr})` }}>
                                <img src="images/christianGirl.jpg" alt="html skills" />
                            </a>
                            <a className="card-description" href="#">
                                <h2>The best theme I've used so far</h2>
                            </a>
                            <div className="card-description">
                                <p>
                                    It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.
                                </p>
                            </div>
                        </li>
                        <li className="card">
                            <a className="card-image" href="#" style={{backgroundImage: `url(${christianGirl})` }}>
                                <img src="images/abstract.jpg" alt="html skills" />
                            </a>
                            <a className="card-description" href="#">
                                <h2>I find modernist design boring, but it so much faster!</h2>
                            </a>
                            <div className="card-description">
                                <p>
                                    It’s also a cultural change, a shift in mindset where the whole company supports a new way of thinking.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blogsection