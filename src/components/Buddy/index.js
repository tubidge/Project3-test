import React from "react";
import "./style.css";

function Buddy(props) {
    return (
        <>
            <li className="goal-buddy">
                <div className="col s6">
                    <p className="buddy-name">ReallyLongBuddyName 1</p>
                </div>
                <div className="col s6">
                    <p><a href="#">View Profile</a></p>
                </div>
            </li>
            <li className="goal-buddy">
                <div className="col s6">
                    <p className="buddy-name">Buddy Name 2</p>
                </div>
                <div className="col s6">
                    <p><a href="#">View Profile</a></p>
                </div>
            </li>
        </>
    )
}

export default Buddy;