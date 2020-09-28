import React from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './homepage.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';
import { BetdeexInst ,BetInst} from '../../ehtereum/Instances';



type Props = {};

type State = {
    betName: string;
    category: string;
    subCategory: string;
    description: string;
    minBet: number | null;
    pricePerThousand: number | null;
    isDraw: boolean | null;
    pauseTimestamp: Date | null;
};


export class Homepage extends React.Component {
    state: State = {
        betName: '',
        category: '',
        subCategory: '',
        description:'',
        minBet: 50,
        pricePerThousand: 998,
        isDraw: false,
        pauseTimestamp:null,
	};
	
	async createBet()  {
        console.log('create bet check');
        try {
            const data = await BetdeexInst.createBet(
              this.context.wallet,
              this.state.betName, this.state.category, this.state.subCategory,
               Number(this.state.pauseTimestamp), true,this.state.description
            );
          } catch (e) {
            console.log("create bet error")
          }
	}
	
	render() {
		return <section>

             
			 <div className="betdeex-hero-bgd">
			<div className="wrapper-container hero-mg">
				<h1>WELCOME TO THE</h1>
				<h1 className="ftr-txt">FUTURE OF PREDICTION</h1>
				<p>"Luck Becomes Limitless Opportunity with Confident Preparation
              <br />Decentralized, Transparent & Trustless"</p>
				<div className="row">
					<a className="bet-btn-st mg-left"  href="/event">EXPLORER EVENTS NOW</a>
					<a className="bet-btn-st mg-left" href="/create-bet">CREATE BET</a>
				</div>
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