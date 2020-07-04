import './list.css';
import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';

import imagelink1 from '../../images/restaurant2.png';
import imagelink2 from '../../images/plat3.png';
import imagelink3 from '../../images/delivery.png';

const  List=(props)=>{
  //console.log(props.myProps);
  const handleClick1=()=>{
    props.myProps.history.push('/restaurants'); 
  }
  const handleClick2=()=>{
    props.myProps.history.push('/meals'); 
  }
  const handleClick3=()=>{
    props.myProps.history.push('/services'); 
  }

  return (
    <Container>
    <Row>
    <Col  className="myclass-offer"> 
                  <img src={imagelink1} alt="ImgRstaurant" className="imgVector"/>
                  <h6>Our Restaurants</h6>
                  <p>We provide food from the best Organic restaurants. </p>
                  <button  onClick={handleClick1} type="button" className="btn btn-success">
                    Check 
                  </button>
    </Col>
    <Col className="myclass-offer"> 
                  <img src={imagelink2} alt="ImgMeal" className="imgVector"/>
                  <h6>Our Meals</h6>
                  <p>We offer the most delicious Organic meals. </p>
                  <button onClick={handleClick2} type="button" className="btn btn-success">
                    Check 
                  </button>
    </Col>
    <Col className="myclass-offer"> 
                  <img src={imagelink3} alt="ImgDelivery" className="imgVector"/>
                  <h6>Our Service</h6>
                  <p>We offer the fastest EcoFrendly delivery. </p>
                  <button onClick={handleClick3} type="button" className="btn btn-success">
                    Check 
                  </button>
    </Col>
    </Row>
    </Container>
  );


}
export default List;