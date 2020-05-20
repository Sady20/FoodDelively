import React from 'react';
import './slideShow.css';
//import {Carousel} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../images/a.jpg';
import img2 from '../../images/b.jpg';
import img3 from '../../images/c.jpg';
import img4 from '../../images/d.jpg';
import img5 from '../../images/e.jpg';



function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
   
    className += " arrow"; 
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }
  


const SlideShow=()=> {

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        
      };
    return (
        
        
        <Slider {...settings}    nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}
        className='posSlid'>
        
        <div className='posDiv'>         
                <img className="MySLidImg" src={img1} alt="Image1" />  
                <div className="textCaption">Caption Text</div>              
        </div>

        <div className='posDiv'>         
                <img className="MySLidImg" src={img2} alt="Image2" />  
                <div className="textCaption">Caption Text</div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img3} alt="Image3" />  
                <div className="textCaption">Caption Text</div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img4} alt="Image4" />  
                <div className="textCaption">Caption Text</div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img5} alt="Image5" />  
                <div className="textCaption">Caption Text</div>              
        </div>
        
      
        
      </Slider>  
      
      

    )
}

export default SlideShow;
