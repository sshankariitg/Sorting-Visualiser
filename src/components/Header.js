import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      
      <div className="header-logo">Sorting<span>Visualiser</span></div>
     
   </div>
  )
}

export default Header;