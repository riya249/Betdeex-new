import React from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './homepage.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';


export class Homepage extends React.Component {

	render() {
		return <section>


			<div className="wrapper-container">

				<h1>WELCOME TO THE</h1>
				<h1 className="ftr-txt">FUTURE OF PREDICTION</h1>
				<p>"Luck Becomes Limitless Opportunity with Confident Preparation
              <br />Decentralized, Transparent & Trustless"</p>
				<div className="row">
					<button className="bet-btn-st" >EXPLORER EVENTS NOW</button>
					<a className="bet-btn-st mg-left" href="/create-bet">CREATE BET</a>
				</div>
			</div>

			<div>
				<h1 className="sect-head">TOP CATERGORIES</h1>
				<div className="row">
					<img className="evnt-img" src={ev1} />
					<img className="evnt-img" src={ev2} />
					<img className="evnt-img" src={ev3} />
					<img className="evnt-img" src={ev4} />
				</div>
				<div className="row">
					<img className="evnt-img" src={ev1} />
					<img className="evnt-img" src={ev2} />
					<img className="evnt-img" src={ev3} />
					<img className="evnt-img" src={ev4} />
				</div>
				<p className="view-txt"> VIEW ALL </p>
			</div>

			<div>
				<div className="sect-container">
					<div className="wrapper-container">
						<h1 className="sect-head">POPULAR EVENTS</h1>
						<div className="row inner-sect">
							<div>
								<div className="pop-ev-box">

								</div>
								<p className="bd-lines">Market/Category</p>
								<p>Will Ethereum Price Cross</p>
							</div>

							<div>
								<div className="pop-ev-box">

								</div>
								<p className="bd-lines">Market/Category</p>
								<p>Will Ethereum Price Cross</p>
							</div>

							<div>
								<div className="pop-ev-box">

								</div>
								<p className="bd-lines">Market/Category</p>
								<p>Will Ethereum Price Cross</p>
							</div>

								<div>
								<div className="pop-ev-box">

								</div>
								<p className="bd-lines">Market/Category</p>
								<p>Will Ethereum Price Cross</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>

			{/* 
<ProgressiveImage
		    alt={"woman"}
		    overlaySrc={
		      "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
		    }
		    src={
		      "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
		    }
		    height='200px'
		    width='150px'
		  /> */}

		</section>;
	}
}