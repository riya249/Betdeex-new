import React from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './Events.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';


export class AllEvent extends React.Component {

	render() {
		return <section>
		<div className="wrapper-container">
            <div className="sect-container">
				<div className="event-innr">
				<h1>WELCOME TO THE</h1>
				<h1 className="ftr-txt">FUTURE OF PREDICTION</h1>
				<p>"Luck Becomes Limitless Opportunity with Confident Preparation
              <br />Decentralized, Transparent & Trustless"</p>
				<div className="row">
					<button className="bet-btn-st ev-btn" >SIGN UP TO EXPLORER EVENTS NOW</button>
					<a className="bet-btn-st mg-left" href="/create-bet">CREATE BET</a>
				</div>
				</div>
				</div>
				<div className="searchBox">
				<form>
	           <input type="search" placeholder="Search Categories"/>
             </form>
				</div>

				<h1 className="event-head">ALL EVENTS</h1>

				<div className="sect-container">
					<div className="row pd-box">
						<div className="left-ev-head">
							<p>Total Volume</p>
							<p className="bd-lines">7774.0 ES</p>

							<p>Platform Fee</p>
							<p className="bd-lines">2%</p>

							<p>Final Result</p>
							<p className="bd-lines">No</p>
							</div>
							<div>
							<div className="main-ev-desc">
								<div className="catg-ev-one">
								<p>CATEGORY / <span className="bd-lines">MARKET</span></p>
								<p>SUB CATEGORY  /<span className="bd-lines">CRYPTO</span></p>
									</div>
									<div className="catg-ev-two">	
								<p>Time Remaining - <span className="bd-lines">Finished</span></p>
									</div>
								</div>
								<h3 className="ev-title">WILL ETHEREUM PRICE CROSS $300 BEFORE 27TH JUNE 2020 00:00:00 UTC ON BINANCE EXCHANGE?</h3>
								<div className="main-ev-desc">
									<div className="bet-border-bx">
										<h4>YES</h4>
										</div>
										<div className="bet-border-bx">
										<h4>YES</h4>
										</div>
										<div className="bet-border-bx">
										<h4>YES</h4>
										</div>
									</div>
								</div>
								
						</div>
				</div>
			</div>



	

		</section>;
	}
}