import React from 'react';
import './slideShow.css';
//import {Carousel} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../images/d.jpg';
import img2 from '../../images/c.jpg';
import img3 from '../../images/b.jpg';
import img4 from '../../images/aa.jpg';
import img5 from '../../images/a.jpg';



/*
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
  */


const SlideShow=()=> {

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,        
        
      };
    return (
        
      <Slider {...settings}      className='posSlid'>
        {/*<Slider {...settings}    nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}
    className='posSlid'>*/}
        
        <div className='posDiv '>         
                <img className="MySLidImg" src={img1} alt="Image1" />  
                <div className="content">
                  <h1>Healthy</h1>
                  <p>A vast number of foods are both healthy and tasty. 
                    By filling your plate with fruits, vegetables, quality protein, 
                    and other whole foods, you’ll have meals that are colorful, surprisingly delicious, and good for you.
                  </p>                
                </div>              
        </div>        
        <div className='posDiv'>         
                <img className="MySLidImg" src={img2} alt="Image3" />  
                <div className="content">
                <h1>Vegetables</h1>
                  <p>Calorie for calorie, vegetables are among the world’s most concentrated sources of nutrients.
                    There’s a wide variety available, and it’s best to eat many different types every day
                  </p>                
                </div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img3} alt="Image2" />  
                <div className="content">
                <h1>Fruits and berries</h1>
                  <p>Fruits and berries are among the world’s most popular health foods.
                    These sweet, nutritious foods are very easy to incorporate into your diet because 
                    they require little to no preparation.
                  </p>                
                </div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img4} alt="Image4" />  
                <div className="content">
                <h1>Fish and seafood</h1>
                  <p>Fish and other seafood tend to be very healthy and nutritious.
                    They’re especially rich in omega-3 fatty acids and iodine, two nutrients in which most 
                    people are deficient.Studies show that people who eat the highest amounts of 
                    seafood — especially fish — tend to live longer and have a lower risk of many illnesses, 
                    including heart disease, dementia, and depression.
                  </p>                
                </div>              
        </div>
        <div className='posDiv'>         
                <img className="MySLidImg" src={img5} alt="Image5" />  
                <div className="content">
                <h1>Chicken breasts</h1>
                  <p>Chicken breast is low in fat and calories but extremely high in protein. It’s a 
                    great source of many nutrients. 
                    Again, feel free to eat fattier cuts of chicken if you’re not eating that many carbs.
                  </p>                
                </div>              
        </div>
        
      
        
      </Slider>  
      
      

    )
}

export default SlideShow;
