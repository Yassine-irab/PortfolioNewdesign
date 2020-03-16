import React from 'react';
import dataBanner from '../databanner.json';
import Skeleton from 'react-loading-skeleton';


const Banner = () => {

  return (
    <div>
        <div className="contain">

        <div className="content-header">
  
          <div className="content">
  
              <div className="title-content">
                <div>{dataBanner.titlecontentfirst || <Skeleton />}</div> <div>{dataBanner.titlecontentsecond || <Skeleton />}</div>
  
              </div>
  
              <div className="body-content">
  
                <div>{dataBanner.bodycontentfirst|| <Skeleton />}</div> <div>{dataBanner.bodycontentsecond || <Skeleton />}</div>.           
  
              </div>
              
              <div className="btn-download">
                  
                  <a href="/" className="btn" title="My Resume" download="Work/cv.rar">
                  
                  Contact Me
                  
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