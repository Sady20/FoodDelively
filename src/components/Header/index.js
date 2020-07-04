import React from 'react';
import MyNav from './Mynav';
import './header.css';


function Header() {
    return (  
        <div className='header '>
                <div className='topBar '>
                    <div>
                        <span className='spanTopBar'><i className="fa fa-clock-o" aria-hidden="true"></i>Working hours: Mon-Sat 07h-19h</span>
                        <span><i className="fa fa-mobile" aria-hidden="true"></i>Call Us : +(212)  05666666</span>
                   </div>
                   <span >
                         <i className="fa fa-facebook-official" aria-hidden="true"></i> 
                         <i className="fa fa-twitter" aria-hidden="true"></i>
                         <i className="fa fa-instagram" aria-hidden="true"></i>
                   </span>
                </div>
                
                <MyNav />                 
        </div>        
            
    )
}

export default Header;
