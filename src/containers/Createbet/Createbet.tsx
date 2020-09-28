import React, { Component } from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './Createbet.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';
import WalletContext from '../../utils/WalletContext';
// import {BetdeexInst, daySwapperInst, betInterfaceInst } from '../../ehtereum/Typechain/index';
import { BigNumber, ethers } from 'ethers';
import DatePicker from 'react-date-picker';
import { BetdeexInst ,BetInst,providerESN} from '../../ehtereum/Instances';
import { AllCategory } from '../../utils/AllCategories';



type Props = {};

type State = {
    betName: string;
    category: number;
    subCategory: number;
    description: string;
    minBet: number | null;
    pricePerThousand: number | null;
    isDraw: boolean | null;
    pauseTimestamp: Date | null;
    spinner: boolean;
};


export class Createbet extends Component<Props, State> {
    static contextType = WalletContext;
    state: State = {
        betName: '',
        category: -1,
        subCategory: -1,
        description:'',
        minBet: 50,
        pricePerThousand: 998,
        isDraw: false,
        pauseTimestamp:null,
        spinner:false
    };


    categoryInstance: AllCategory;


    constructor(props:Props){
        super(props);
         this.categoryInstance = new AllCategory();
    }
   
    componentDidMount() {
        this.fetchNewBetEvent().catch((e) => console.log(e));
    }

    

    //@ts-ignore
    onChangeDate = pauseTimestamp => this.setState({ pauseTimestamp })
    
    // async createBet() {
    //     console.log("create bet")
    //         await window.BetdeexInst.connect(window.wallet).storageFactory('0x780Ad6FD10BA103b4808F454e869853052AE9D67');
    //         await window.BetdeexInst.connect(window.wallet).
    //         createBet(this.state.betName, this.state.category, this.state.subCategory, Number(this.state.pauseTimestamp), this.state.description, false, 1600000000);
    //         console.log(window.BetdeexInst.clonedContracts(1));
    //     }       
    
 
    createBet =  async(event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        this.setState({spinner:true})
        console.log('create bet check');
        try {
            const tx = await BetdeexInst.connect(window.wallet.connect(providerESN)).
            createBet(this.state.betName,this.state.category.toString(),this.state.subCategory.toString(), '0','0',  false, 1600000000);
            const receipt = await tx.wait()
            console.log('receipt',receipt);
            this.fetchNewBetEvent()
          } catch (e) {
            console.log("create bet error",e)
          }
          this.setState({
              spinner:false,
              betName: '',
              category: -1,
              subCategory: -1,
              description:'',
              isDraw: false,
              pauseTimestamp:null,
        })
    }

   
 

    async fetchNewBetEvent() {
        const data = (
          await BetdeexInst.queryFilter(
            BetdeexInst.filters.NewBetEvent(
              null,
              null,
              null,
              null,
              null,
            )
          )
        )
        console.log('fetchbet',data)
          const betList = data.map((log) => {
            return BetdeexInst.interface.parseLog(log)
          })
          console.log("check a",betList)
          betList.map((log) => {
            
          });
      }

     
  

    render()
   
       {
        console.log('check category',this.categoryInstance);
        return <section>
            <div className="wrapper-container">

                <h1>WELCOME TO THE</h1>
                <h1 className="ftr-txt">FUTURE OF PREDICTION</h1>
                <p>"Luck Becomes Limitless Opportunity with Confident Preparation
              <br />Decentralized, Transparent & Trustless"</p>
                <div className="row">
                    <button className="bet-btn-st" >EXPLORER EVENTS NOW</button>
                </div>
            </div>

            <div className="wrapper-container">
                <form>
                    <div className="form-group">
                        <label>Prediction Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Bet name" onChange={(event) => this.setState({ betName: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <label> Select Category</label>
                        <select className="form-control" id="exampleFormControlSelect1"
                            onChange={(event) => this.setState({ category: Number(event.target.value) })}>
                            <option></option>
                          {this.categoryInstance.getCategory()?.map((category:string ,index:number)=>{
                              return <option value={index} key={index}>{category}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label> Select Sub-Category</label>
                        <select className="form-control" id="exampleFormControlSelect1"
                            onChange={(event) => this.setState({ subCategory:Number(event.target.value ) })}>
                           <option></option>
                           {this.categoryInstance.getSubCategory(this.state.category)?.map((category:string ,index:number)=>{
                              return <option value={index} key={index}>{category}</option>
                        
                           
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Pause Timestamp</label>
                        <div>
                            <DatePicker
                               onChange={this.onChangeDate}
                               value={this.state.pauseTimestamp}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" id="description" aria-describedby="emailHelp" placeholder="description" />

                    </div>
                    <div className="form-group">
                        <label> Draw Possible</label>
                        <select className="form-control" id="exampleFormControlSelect1"
                            onChange={(event) => this.setState({ isDraw: Boolean(event.target.value )})}>
                           <option></option>
                            <option value="true">YES</option>
                            <option value="false">NO</option>
                        </select>
                    </div>
                    <button className="btn btn-primary"
                        onClick={this.createBet}>{this.state.spinner ? 'Loading...':'Create Prediction'}</button>
                </form>
            </div>
        </section>;
    }
}