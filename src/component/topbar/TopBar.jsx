import { NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import './TopBar.css'

export default function TopBar(){
     
    return(
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">TimeTracker-Admin</span>

                    </div>
                    <div className="topRight">
                        <div className="topbarIconsContainer">
                            <NotificationsNone className="topbarIcon"/>
                            <span className="topIconBagde">2</span>
                        </div>
                        <div className="topbarIconsContainer">
                            <Settings className="topbarIcon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}