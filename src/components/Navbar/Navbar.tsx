import React, { useContext , Component } from 'react';
import { ThemeContext } from '../../lib/Theme/ThemeContext';
import { logo } from '../Images/Image';
import './Navbar.css'; 
import WalletContext from '../../utils/WalletContext';



export class  Navbar extends Component {
  // const context = useContext(ThemeContext);
  static contextType = WalletContext;
  componentDidMount() {
  }


  openEraswapLife() {
    window.open('https://eraswap.life/', 'SignUp/Login', 'width=1000,height=650');
  }

  signOut() {
    window.location.href = '/';
  }

  render() {
    console.log("check login",this.context.wallet);
    
    return ( <header id="header" className="header-inner-pages">
	{/* <button className="btn btn-default" onClick={context.toggleTheme}>Toggle Theme</button> */}
   <div className="nav-two-container" >
   <ul className="nav-top-flex">
      <li className="bd-lines tm-spc">CURRENT TIME: 17/08/2020 ,12:37:13</li>
      <div className="grn-bd"></div>
      <li className="bd-lines tm-spc">ES PRICE: 0.0941 USDT / 0.0000000809 BTC</li>
      <div className="grn-bd"></div>
      <li className="bd-lines tm-spc">GAS PRICE:0 ESMETER </li>

      </ul>
   </div>
  
	<nav className="navbar navbar-light justify-content-around">
  <a className="navbar-brand"> <img className="btdex-logo" src={logo} /></a>
  
  <li className="nav-item dropdown">
  {this.context?.wallet ? (
              <>
   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Wallet address
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Acount Page</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
        </>
            ) : (
              <>
      
        <a  onClick={this.openEraswapLife}  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Connect To Wallet
        </a>
        </>
            )}
      </li>
</nav>

   <div className="nav-two-container" >
     <ul className="nav-flex">
     <a href="/"><li className="nav-list-txt">HOME</li></a> 
     <a  href="/event">  <li className="nav-list-txt">EVENTS </li></a>
      <li className="nav-list-txt" >RESULTS</li>
       <li className="nav-list-txt">ABOUT US</li>
       <li className="nav-list-txt">FAQ'S</li>
      </ul>
      </div>

  </header>
   );
  }
}
