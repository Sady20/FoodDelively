import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import './landing.css';
import MySlide from '../SlideShow';
import List from '../List';
import Cards from '../Cards';

import imgLink1 from '../../images/logo1.jpg';
import imgHeadreLink1 from '../../images/trophy1.png';
import imgHeadreLink2 from '../../images/trophy2.png';
import imgHeadreLink3 from '../../images/trophy3.png';


const Landing=(props)=> {

    return (
        <main >
            <MySlide/>
            <List  myProps={props}/>  {/*passer le router psops au elements de landing*/}
            <CardGroup className='cardGroup'>
            <Cards title1="Nom du Plat de la base" 
                   date1="Date du plat de la base"
                   srcHeaderValue1={imgHeadreLink1 }
                   altValue1="imgHeadreLink1"
                   srcValue1={imgLink1}
                   altValue1="imgLink1"
                   valueP1="La description du plat de la base : Le plat le plus commander PPCommander= max( de la base)
                   This is a wider card with supporting text below as a natural "
                   valueFooter1="Last updated 3 mins ago"
                   
            />
            <Cards title1="Nom du Plat de la base" 
                   date1="Date du plat de la base"
                   srcHeaderValue1={imgHeadreLink2 }
                   altValue1="imgHeadreLink2"
                   srcValue1={imgLink1}
                   altValue1="imgLink1"
                   valueP1="La description du plat de la base : Le plat le plus commander PPCommander= max( de la base)
                   This is a wider card with supporting text below as a natural "
                   valueFooter1="Last updated 3 mins ago"
                   
            />
            <Cards title1="Nom du Plat de la base" 
                   date1="Date du plat de la base"
                   srcHeaderValue1={imgHeadreLink3 }
                   altValue1="imgHeadreLink3"
                   srcValue1={imgLink1}
                   altValue1="imgLink1"
                   valueP1="La description du plat de la base : Le plat le plus commander PPCommander= max( de la base)
                   This is a wider card with supporting text below as a natural "
                   valueFooter1="Last updated 3 mins ago"
                   
            />
            
            </CardGroup>      
           
        </main>
           
    )
}

export default Landing;
