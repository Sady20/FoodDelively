import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../images/logo.jpg';


const Mynav=() =>{
    return (
        
            
        <Navbar className='nav nav-links' collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand ><img  className='logo'  src={logo} alt="logo"   /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                   <Link to='/'><Nav.Link href="#landing">Home</Nav.Link></Link> 
                   <Link to='/about'><Nav.Link href="#about">About Us</Nav.Link></Link> 
                   <Link to='/contact'><Nav.Link href="#contact">Contact Us</Nav.Link></Link> 
                    
                </Nav>
                <Nav>
                <Link to='/signup'> <Nav.Link href="#signup">Sign up</Nav.Link></Link> 
                <Link to='/login'> <Nav.Link  href="#login">Sign in</Nav.Link></Link> 
                </Nav>
        </Navbar.Collapse>
      </Navbar>                         
                           
                
        
    )
}

export default Mynav;
