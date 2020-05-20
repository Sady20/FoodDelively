import React, {Component}  from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './cards.css';

class Cards extends Component{ 


    render(){
    return (
<CardGroup className='cardGroup'>
  <Card >
        <Card.Img variant="top"  className={this.props.NClass}   src={this.props.srcValue1} alt={this.props.altValue1} />
        <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    {this.props.valueP1}
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
  </Card>
  <Card >
        <Card.Img variant="top" className={this.props.NClass}  src={this.props.srcValue2} alt={this.props.altValue2}/>
        <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    {this.props.valueP2}
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
  </Card>
  <Card >
        <Card.Img variant="top" className={this.props.NClass}   src={this.props.srcValue3} alt={this.props.altValue3}/>
        <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    {this.props.value3}
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
  </Card>
  
  </CardGroup>
    );
}
}
export default Cards
