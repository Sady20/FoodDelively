import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';
import Landing from '../Landing';
import Error from '../Error';
import Signup from '../Signup';
import Login from '../Login';
import Logout from '../Logout';
import ForgetPassword from '../ForgetPassword';
import Welcome from '../Welcome';


  
import './App.css';

function App() {
  return (
    <Router >    
      <Header/> 
     <Switch>
         <Route exact path="/" component={Landing} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact } />   
         <Route path="/signup" component={Signup} /> 
         <Route path="/login" component={Login} />    
         <Route path="/Welcome" component={Welcome} />    
         <Route path="/logout" component={Logout} />          
         <Route path="/forgetpassword" component={ForgetPassword} />     
         <Route component={Error} />
   
    </Switch>
    <Footer/>    
   </Router>
  );
}

export default App;
