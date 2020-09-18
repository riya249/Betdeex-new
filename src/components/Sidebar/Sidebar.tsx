import React from 'react';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import './Sidebar.css';
import { ev1, ev2, ev3, ev4 } from '../../components/Images/Image';


export class Sidebar extends React.Component {

	render() {
		return <div>
            <div className="sect-container">
            <div className="sidebar-container"> 
                <div className="catg-side">CATEGORIES</div>
                <div>POPULAR CATEGORIES</div>
                <ul>
                    <li className="main-ev-desc ev-border"><p className="sd-txt">All</p><div className="bet-value">10</div></li>

                    <li className="main-ev-desc ev-border"><p className="sd-txt">Sports </p><div className="bet-value">25</div></li>

                    <li className="main-ev-desc ev-border"><p className="sd-txt">Politics</p><div className="bet-value">35</div></li>

                    <li className="main-ev-desc ev-border"><p className="sd-txt">Movies</p><div className="bet-value">23</div></li>

                    <li className="main-ev-desc ev-border"><p className="sd-txt">Technologies</p><div className="bet-value">8</div></li>
                 </ul>
                </div>
            </div>
		
                </div>
	}
}