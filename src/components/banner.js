import React, { useEffect } from 'react';
import dataBanner from '../databanner.json';
import Skeleton from 'react-loading-skeleton';
import { gsap } from "gsap";

const Banner = () => {

  useEffect(() => {
    gsap.from([".firstTitle",".secondTitle"], {
      delay: 0.4,
      ease: "power3.out",
      y: 80,
      stagger: {
        amount: 0.15
      }
    });
  }, [".firstTitle",".secondTitle"]);

  return (
    <div>
        <div className="contain">

        <div className="content-header">

          <div className="content">

              <div className="title-content titleContenthidden">
                <div className="Title">
                  <div className="firstTitle"><p>{dataBanner.titlecontentfirst || <Skeleton />}</p></div>
                </div>
                <div className="Title">
                  <div className="secondTitle"><p>{dataBanner.titlecontentsecond || <Skeleton />}</p></div>
                </div>
              </div>

              <div className="body-content">
                <div className="TitleText">
                  <div className="firstTitle">{dataBanner.bodycontentfirst|| <Skeleton />}</div>
                </div>
                <div className="TitleText">
                  <div className="secondTitle">{dataBanner.bodycontentsecond || <Skeleton />}</div>
                </div>
              </div>

              <div className="btn-download">

                  <a href="#" className="btn" title="My Resume" download="http://yassine-irab.me/wp-content/uploads/2020/04/LatestVersion-of-english-resume.pdf">

                  Download Cv

                  </a>

              </div>

          </div>    
  
        </div>

      </div>

      <div className="clear"></div>  
    </div>
  )
}

export default Banner