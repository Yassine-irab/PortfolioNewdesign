import React from 'react';

/* Importa images */
import wordpress from '../images/wordpress.png'
import javascript from '../images/javascript.png'
import reactjs from '../images/reactjs.png'
import gatsby from '../images/gatsby.png'
import Gulp from '../images/Gulp.png'
import Git from '../images/Git.png'

/*import InfiniteCarousel from 'react-leaf-carousel';*/

const Skills = () => {
    return (

        <div className="SectionSkills">
            <div className="contain">
                {/*<div className="titleSkills">
                    <h2>skills</h2>
                </div>*/}
                <div className="skills">
                    <div className="row">

                       {/* <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 2,
                                    },
                                },                                
                                {
                                    breakpoint: 770,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },                                
                            ]}
                            dots={true}
                            arrows= {true}
                            swipe={true}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={2}
                            slidesToShow={6}
                            scrollOnDevice={true}
                        >*/}

                        <div className="skill-item">
                            <img className="item-icon" alt="" src={wordpress} />
                        </div>

                        <div className="skill-item">
                            <img className="item-icon" alt="" width="100" src={javascript} />
                        </div>

                        <div className="skill-item">
                            <img className="item-icon" alt="" width="100" src={reactjs} />
                        </div>

                        <div className="skill-item">
                            <img className="item-icon" alt="" width="100" src={gatsby} />
                        </div>

                        <div className="skill-item">
                            <img className="item-icon" alt="" width="100" src={Gulp} />
                        </div>

                        <div className="skill-item">
                            <img className="item-icon" alt="" width="100" src={Git} />
                        </div>
                        {/*</InfiniteCarousel>*/}
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Skills