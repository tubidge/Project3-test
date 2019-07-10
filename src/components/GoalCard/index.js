import React from "react";
import MilestoneColumn from "../MilestoneColumn";
import Milestone from "../Milestone";
// import "./style.css";  Why doesn't this stylesheet do anything?


function GoalCard(props) {
    return (
        <div className="card goal-card">
            <div className="card-content">
                <div className="card-title center-align">{props.name}</div>
                <div className="row goal-detail-row center-align">Due: {props.due}</div>
                <div className="row goal-detail-row center-align">{props.desc}</div>
                <div className="row" />

                <div className="row">
                    {props.children}
                    {/* <div className="col s6">
                        <div className="row center-align">
                            <div className="goal-sub-title">
                                <p className="goal-subtitle">Goal Buddies</p>
                            </div>
                            <ul className="goal-detail-sublist">
                                <li>
                                    <div className="col s6">
                                        <span>Buddy 1</span>
                                    </div>
                                    <div className="col s6">
                                        <span><a>View Profile</a></span>
                                    </div>
                                </li>
                                <li>Buddy 2</li>
                                <li>Buddy 3</li>
                                <li>Buddy 4</li>
                            </ul>
                            <button href="#" className="btn-small light-blue accent-4">
                                Add Buddy
                            </button>
                        </div>
                    </div> */}
                </div>

            </div>
        </div >
    );
};

export default GoalCard;
