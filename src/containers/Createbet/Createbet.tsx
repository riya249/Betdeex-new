import React, { Component } from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './Createbet.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';



type Props = {};

type State = {};

export class Createbet extends Component<Props, State> {
    

    state: State = {
    }



    render() {
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
                        <label> Select Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label> Select Sub-Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="description" />

                    </div>
                    <div className="form-group">
                        <label> Select Sub-Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>YES</option>
                            <option>NO</option>

                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Create Bet</button>
                </form>

            </div>



        </section>;
    }
}