import React, { useState, Fragment } from 'react'
import Company from "./Company"




function Nav() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
      
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
 
  
   
  
  <section className={ colorChange ? 'app-banner isSmall  banner-60-40 pillars-main  fixed-nav': 'app-banner isSmall red banner-60-40 pillars-main '} style={{  minHeight:" initial !important"}}>
  <header  className={colorChange ? ' ct-header  ' : ' ct-header padding-top '}  style={{position: "fixed"}}>
  
    <div className="wrapper">
    <div className="nav-logo-wrap"><a href="/" className="ct-logo">CleverTap</a>
       <div className="navToggle">
          <span></span>
      </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li className="gallery has-dropdown"> <a href="/">Product</a></li>
          <li className="has-dropdown gallery" ><a  href="/">
  Industries
  
            </a></li>
          <li className="gallery"><a  href="/">Successes</a></li>
          <li className="gallery has-dropdown" ><a  href="/">Resoures</a></li>
        <li className="gallery has-dropdown" ><a href ="/">Company</a></li>
        </ul> </nav>
        <nav className="main-nav has-rightSide"> <ul> <li className="no-blue"><a  href="/">Login</a></li>
        <li><a href="/" className="c-btn ">Get Started</a></li>
        </ul>
        </nav>
    
  </div>
  
    </header>
  <div className ="wrapper">
     <div className="heroContent">
      <div className="lhs-align  lhs-main " style={{width:"50%",float:"left"}}>
        <h1 className="mainContent mainHeading"> Retain Users, <br/>  Ignite Growth</h1>
        <p className="heroContent__subText">Join the 10,000+ mobile brands around the world who trust CleverTap to boost app engagement and unlock growth.</p>
       
        <div className="get_started">
        <a className="schedule c-btn c-btn-reverse" name="signUpP" title="Schedule a Demo" type="button" role="button" href="/">Get started</a>
      </div>
      <div className='ppcpages'>
  <Company></Company>
      </div>
      
      </div>
      <div className="rhs-align " style={{width:"50%",float:"right",position:"relative"}}><img src="https://info.clevertap.com/hubfs/homepage-Feature-image.webp" alt="CT-Banner"/>
      </div>
     
     
  </div>
  
  </div>
  
  
  
  </section>


</>

  );
}

export default Nav;
