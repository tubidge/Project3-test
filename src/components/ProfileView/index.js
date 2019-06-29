import React from "react";
import "./style.css";

function ProfileView() {
    return (
        <div className="container profile-container">
            {/* ROW 1 */}
            <div className="row">
                <div className="col s2">
                    <div className="row">
                        <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/44684121?s=460&v=4"></img>
                    </div>
                    <div className="row">
                        <h4 className="profile-name">Username</h4>
                        <div className="button">
                            <a href="#" className="btn-small">Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="col s8 offset-s1">
                        <div className="row top-row" />
                        <div className="row">
                            <h5>User Info</h5>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <div className="row">
                                    <b>Name</b>
                                </div>
                                <div className="row">
                                    <b>User Since</b>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="row">
                                    <b>Email</b>
                                </div>
                                <div className="row">
                                    <b>Test</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ROW 2 */}
            <div className="row">
                <div className="col s2" />
                <div className="col s8 offset-s1">
                    <div className="Row">
                        <h5>Notification Preferences</h5>
                        <hr />
                        <br />
                        Email: On
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileView;
