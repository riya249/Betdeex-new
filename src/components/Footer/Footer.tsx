import React from 'react';
import './Footer.css';
import { logo, fb, linkdIn, twitter, youtube, insta } from '../Images/Image';



export const Footer = () => {
  return <header>
    <div className="footer-bgd-color">
      <div className="footer-container">
        <div className="row">
          <div className="col-sm-4">
            <img className="btdex-logo" src={logo} />
            <p className="bd-lines">Please read the Disclaimer, Terms and Conditions,
                    <br />Legal Terms carefully before strating with BetDeEx</p>
          </div>
          <div className="col-sm-4">
            <ul>
              <li className="bd-lines">User Manual</li>
              <li className="bd-lines">Results</li>
              <li className="bd-lines">Era Swap Terms & Conditions</li>
              <li className="bd-lines">Terms & Conditions </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <ul>
            <li className="bd-lines">Era Swap White Paper</li>
            <li className="bd-lines">BetDeEx DApp Smart Contract</li>
            <li className="bd-lines">Howey Test</li>
            <li className="bd-lines">Privacy Policy</li>
            </ul>

          </div>
        </div>
        <div className="social-container">
          <p className="bd-lines">&copy; 2020 BetDeEx. All Rights Reserved</p>
          <ul className="social-sm-flex">
            <li>
              <a
                href="https://www.facebook.com/eraswap"
                target="_blank"
              >
                <img className="social-img" src={fb} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/eraswap/"
                target="_blank"
              >
                <img className="social-img" src={linkdIn} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/eraswap/?hl=en"
                target="_blank"
              >
                <img className="social-img" src={insta} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EraSwapTech" target="_blank">
                <img className="social-img" src={twitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g?view_as=subscriber"
                target="_blank"
              >
                <img className="social-img" src={youtube} />
              </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
  </header>;
}