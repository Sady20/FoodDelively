import React, {Component}  from 'react';
import Card from 'react-bootstrap/Card';
import './cards.css';

class Cards extends Component{ 


    render(){
    return (

  <Card >
        <Card.Header className="CardHeader" >
            <img className="cardHeaderImg"  src={this.props.srcHeaderValue1} alt={this.props.altHeaderValue1} />

            <Card.Title>{this.props.title1} </Card.Title>
             {this.props.date1}
        </Card.Header>
        <Card.Body>
                <Card.Img variant="top"  className="cardImg"  src={this.props.srcValue1} alt={this.props.altValue1} />

                <Card.Text className="cardTest">
                    {this.props.valueP1}
                </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <small className="text-muted"> {this.props.valueFooter1}</small>
        </Card.Footer>
  </Card>
 
 );
}
}
export default Cards
