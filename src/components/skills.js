import React from 'react';

/* Importa images */
import wordpress from '../images/wordpress.png'
import javascript from '../images/javascript.png'
import reactjs from '../images/reactjs.png'
import gatsby from '../images/gatsby.png'
import Gulp from '../images/Gulp.png'
import Git from '../images/Git.png'


const Skills = () => {
    return (

        <div className="SectionSkills">
            <div className="contain">
                {/*<div className="titleSkills">
                    <h2>skills</h2>
                </div>*/}
                <div className="skills">
                    <div className="row">

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

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Skills