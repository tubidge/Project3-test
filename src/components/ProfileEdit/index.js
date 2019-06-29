import React from "react";
import "./style.css";

function ProfileEdit() {
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
                    </div>
                </div>
                <div className="col s8 offset-s1">
                    <div className="row top-row">
                        <h4>Edit Profile</h4>
                    </div>
                    <div className="row">
                        <h5>User Info</h5>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="row">
                                <b>Name</b>
                                <div className="row">
                                    <div className="col sm-6">
                                        <input placeholder="Philip Benson" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <b>User Since</b>
                                <div className="row">
                                    <div className="col sm-6">
                                        June 29, 2019
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="row">
                                <b>Email</b>
                                <div className="row">
                                    <div className="col sm-6">
                                        <input placeholder="tubidge@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <b>Placeholder</b>
                                <div className="row">
                                    <div className="col sm-6">
                                        Whatever
                                    </div>
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
                    <div className="row">
                        <h5>Notification Preferences</h5>
                        <hr />
                    </div>
                    <div className="row">
                        <b>Site Notifications</b>
                        <div className="row">
                            <div className="col s6">
                                <span>New Goal Match: </span>
                                <span className="switch">
                                    <label>
                                        Off
                                        <input type="checkbox" />
                                        <span class="lever"></span>
                                        On
                                    </label>
                                </span>
                            </div>
                            <div className="col s6">
                                <span>Buddy Goal Progress: </span>
                                <span className="switch">
                                    <label>
                                        Off
                                        <input type="checkbox" />
                                        <span class="lever"></span>
                                        On
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <b>Email Notifications</b>
                        <div className="row">
                            <div className="col s6">
                                <span>New Goal Match: </span>
                                <span className="switch">
                                    <label>
                                        Off
                                        <input type="checkbox" />
                                        <span class="lever"></span>
                                        On
                                    </label>
                                </span>
                            </div>
                            <div className="col s6">
                                <span>Buddy Goal Progress: </span>
                                <span className="switch">
                                    <label>
                                        Off
                                        <input type="checkbox" />
                                        <span class="lever"></span>
                                        On
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileEdit;
