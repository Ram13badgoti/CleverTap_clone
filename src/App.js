
import React from 'react'
import Navbar from "./Components/Navbar.jsx"
import Badges from "./Components/Badges.jsx"
import Growth from './Components/Growth.jsx';
import Usermessage from "./Components/User_message"
import Datawrap from './Components/Data_wrap.jsx';
import NewPlatform from './Components/NewPlatform.jsx';
import Resource from './Components/Resource.jsx';
import Footerlink from './Components/Footer_link.jsx';

import Review from './Components/Review.jsx';
import "./Style/Style.css"


function App() {
 
 
  return (
<>

<Navbar></Navbar>

<Badges></Badges>
<Growth></Growth>
<Usermessage></Usermessage>
<Datawrap></Datawrap>
<Review></Review>
<NewPlatform></NewPlatform>
<Resource></Resource>
<Footerlink></Footerlink>



</>

  );
}

export default App;
