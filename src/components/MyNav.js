import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Badge } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./MyNav.css";
function Navbar({ profileImg }) {
  return (
    <nav className="navbar navbar-expand-sm   mynav">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar__items"
          id="navbarSupportedContent"
        >
          <div>
            <h4 className="myNav__logo">
              <span className="myNav__FirChar">H</span>OURS
            </h4>
          </div>
          <div className="navbar__links">
            <ul>
              <li className="navbar__active">Dashboard</li>
            </ul>
            <ul>
              <li>Projects</li>
            </ul>
            <ul>
              <li>Team</li>
            </ul>
            <ul>
              <li>Client</li>
            </ul>
            <ul>
              <li>Time</li>
            </ul>
            <ul>
              <li>Report</li>
            </ul>
          </div>
          <div className="navbar__profile">
            <Badge variant="dot" className="navbar__ball">
              <NotificationsIcon />
            </Badge>

            <Avatar src={profileImg} alt="profile_image" className="myNav__image"/>
            Mario
            <ArrowDropDownIcon />
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
