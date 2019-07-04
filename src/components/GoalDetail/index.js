import React from "react";

function GoalDetail() {
    return (
        <div className="card goal-card">
            <div className="card-content">
                <div className="card-title center-align"><b>Goal Title</b></div>
                <div className="row goal-detail-row center-align">Due 01/01/2019</div>
                <div className="row goal-detail-row center-align">Here is a description of your goal</div>
                <div className="row" />

                <div className="row">
                    <div className="col s6">
                        <div className="row center-align">
                            <div className="goal-sub-title center-align">
                                <b>Milestones</b>
                            </div>
                            <ul className="goal-detail-sublist">
                                <li>Milestone 1</li>
                                <li>Milestone 2</li>
                                <li>Milestone 3</li>
                                <li>Milestone 4</li>
                            </ul>
                            <button href="#" className="btn-small">
                                Add Milestone
                            </button>
                        </div>
                    </div>

                    <div className="col s6">
                        <div className="row center-align">
                            <div className="goal-sub-title">
                                <b>Buddies</b>
                            </div>
                            <ul className="goal-detail-sublist">
                                <li>Buddy 1</li>
                                <li>Buddy 2</li>
                                <li>Buddy 3</li>
                                <li>Buddy 4</li>
                            </ul>
                            <button href="#" className="btn-small">
                                Add Buddy
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GoalDetail;
