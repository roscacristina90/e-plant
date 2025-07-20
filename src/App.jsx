
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const [displayPost, setDisplayPots] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const plants = [
    "cactus",
    "palm tree",
    "orchid"
  ];
  const plant = "cactus";
  const topTips = "remeber to water my pumpkin";
  const plantPots = [
    "orchids",
    "lavander"
  ];
  const handleClick = (e) => {
    
    setDisplayPots((prev)=>!prev);
  };


  // returns jsx - mixture of html and javascript
  // class -className
  return (
    <div className="app-container">
      <div>Hello World {plant}</div>
<button onClick = {handleClick}>display pots</button>
<br></br>
{displayPost ? plantPots.map((value,idx) => {return value;}) : null}
    
    </div>
    
  );
}

export default App;



