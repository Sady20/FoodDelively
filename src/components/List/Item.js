import React, {Component} from 'react';
import './list.css'; 

class Item extends Component{  
 
 render(){

  return (
    
    
    <div class="testDIV">
        
        <img src={this.props.imagM} alt="Sorry no image!"/>
        <h5>{this.props.valueH5}</h5>
        <p>{this.props.valueP}</p>
        <span>A partir de </span><br></br>
        <span>{this.props.valueSPAN2}</span><br></br>
   </div>     
   
    

  );
}

}
export default Item; 
