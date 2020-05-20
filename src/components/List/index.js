import './list.css';
import React, {Component} from 'react';
import Item from './Item' ;
import imagelink1 from '../../images/restaurant1.png';
import imagelink2 from '../../images/menu1.jpg';
import imagelink3 from '../../images/plat1.png';

class List extends Component{

 render(){

  return (
   <div class="testDIV2">
     <Item   imagM= {imagelink1} valueH5="Our Restaurants"  
     valueP="   ipsum dolor sit tempore evenieearum rem. Explicabo, neque! " valueSPAN2="8.50£"/>

     <Item   imagM= {imagelink2} valueH5="Our Menus" 
     valueP="  P22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. C. Explicabo, neque! " 
     valueSPAN2="7.60£"/>
                
     <Item  imagM= {imagelink3} valueH5="Our Meals " 
     valueP="  P33333 Lorem ipsum dolor sit amet consectetur mollitia earum rem. Explicabo, neque! " 
     valueSPAN2="9.00£"/>
     
   </div>
  );
}

}
export default List;