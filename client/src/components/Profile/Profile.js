import React from 'react';
import './Profile.css';

const Profile = (props) => {

    return (
        <div className="profile-section">
            <div className="profile-title">
                Profile
            </div>
            <div className="profile-non-title">
                <div className="profile-info">
                    <div className = "profile-info-text">
                        I am curr


                    </div>
                </div>
                    
                <div className="profile-right">
                    <div className="profile-picture">
                        <img src='profile.png' alt="logo"></img>
                    </div>

                    <div className="profile-other-info">
                        <div className = "profile-other-info-text">
                            <p>Name: Frank Yang</p>
                            <p>Birthday: 27th August</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile