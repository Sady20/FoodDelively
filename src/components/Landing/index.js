import React ,{Fragment}from 'react';
import './landing.css';
import MySlide from '../SlideShow';
import List from '../List';
import Cards from '../Cards';


const Landing=()=> {
    return (
        <Fragment>
            <MySlide/>
            <List/>        
            <Cards/>
            <Cards/>
        </Fragment>
           
    )
}

export default Landing;
