import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import prince from '../images/prince.jpg'
import jackson from '../images/mj_offthewall.jpg'
import jbrown from '../images/james_brown.jpg'
import curtis from '../images/curtis_mayfield_pusherman.jpg'
import stevie from '../images/stevie_cover_all_i_do.jpg'
import jose from '../images/jose_james.jpg'

export default () => {
    return(
        <div>
            <Carousel 
                autoPlay
                infiniteLoop={true}
                interval={4000}
                showThumbs={false}
                showStatus={false}
                stopOnHover={false}>
                <div className="gallery__image"><img className='slides' src={prince} alt="gallery" /></div>
                <div className="gallery__image"><img className='slides' src={jackson} alt="gallery" /></div>
                <div className="gallery__image"><img className='slides' src={jbrown} alt="gallery" /></div>
                <div className="gallery__image"><img className='slides' src={curtis} alt="gallery" /></div>
                <div className="gallery__image"><img className='slides' src={stevie} alt="gallery" /></div>
                <div className="gallery__image"><img className='slides'src={jose} alt="gallery" /></div>
            </Carousel>
            
        </div>
    )
}
