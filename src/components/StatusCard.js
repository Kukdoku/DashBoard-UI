import * as React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CachedIcon from "@mui/icons-material/Cached";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import "./statusCard.css";

export default function StatusCard({ iconsName, text, number }) {

  let icons = "";
  if (iconsName === "GridViewIcon") {
    icons = <GridViewIcon className="status__icon" />;
  } else if (iconsName === "CheckCircleOutlineIcon") {
    icons = <CheckCircleOutlineIcon className="status__icon" />;
  } else if (iconsName === "CachedIcon") {
    icons = <CachedIcon className="status__icon" />;
  } else if (iconsName === "GppGoodIcon") {
    icons = <GppGoodIcon className="status__icon denger__icon" />;
  } else if (iconsName === "PeopleAltIcon") {
    icons = <PeopleAltIcon className="status__icon" />;
  }

  return (
    <div className={`status__card ${text === "Delayed" && "denger"}`}>
      {icons}
      <h5 className="status__no">{number}</h5>
      <p className="status__info">{text}</p>
    </div>
  );
}
