import React from "react";
import "./style.css";

function Buddy(props) {
    return (
        <>
            <li className="goal-buddy">
                <div className="col s6">
                    <span className="buddy-name">Buddy 1</span>
                </div>
                <div className="col s6">
                    <span><a href="#">View Profile</a></span>
                </div>
            </li>
            <li className="goal-buddy">
                <div className="col s6">
                    <span className="buddy-name">Buddy 1</span>
                </div>
                <div className="col s6">
                    <span><a href="#">View Profile</a></span>
                </div>
            </li>
        </>
    )
}

export default Buddy;