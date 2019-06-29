import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <span className="repo-link">GoalDone
                    <span><a href="https://github.com/tubidge/Project-3" target="blank">{" "}GitHub Repository</a></span>
            </span>
            <span className="contact-link"><a href="#">Contact the Team</a></span>
        </footer>
    )
};

export default Footer;