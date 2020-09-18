import React, { useContext } from 'react';
import { ThemeContext } from '../../lib/Theme/ThemeContext';
import { logo } from '../Images/Image';
import './Navbar.css'; 




export const  Navbar = () => {
	const context = useContext(ThemeContext);
	console.log({context})
	return <header id="header" className="header-inner-pages">
	<button className="btn btn-default" onClick={context.toggleTheme}>Toggle Theme</button>
   <div className="nav-two-container" >
   <ul className="nav-top-flex">
      <li className="bd-lines tm-spc">CURRENT TIME: 17/08/2020 ,12:37:13</li>
      <li className="bd-lines tm-spc">ES PRICE: 0.0941 USDT / 0.0000000809 BTC</li>
      <li className="bd-lines tm-spc">GAS PRICE:0 ESMETER </li>

      </ul>
   </div>
  
	<nav className="navbar navbar-light justify-content-around">
  <a className="navbar-brand"> <img className="btdex-logo" src={logo} /></a>
  <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CONNECT TO WALLET
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Acount Page</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
</nav>

   <div className="nav-two-container" >
     <ul className="nav-flex">
      <li><a href="/">HOME</a></li>
      <li> <a href="/event"> EVENTS </a></li>
      <li >RESULTS</li>
       <li>ABOUT US</li>
       <li>FAQ'S</li>
      </ul>
      </div>

	</header>;
}
