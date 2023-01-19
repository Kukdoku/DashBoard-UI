import { Avatar } from "@mui/material";
import React from "react";
import EuroIcon from "@mui/icons-material/Euro";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./infoCard.css";

function InfoCard({
  title,
  name,
  budget,
  profit,
  hoursMsg,
  meter,
  photo,
  color,
}) {
  let sign;
  if (title === "Insurance App") {
    sign = (
      <ReportProblemIcon
        style={{
          color: "red",
          position: "relative",
          left: "90px",
          fontSize: "20px",
        }}
      />
    );
  } else if (title === "VR Website") {
    sign = (
      <CheckCircleOutlineIcon
        style={{
          color: "green",
          position: "relative",
          left: "90px",
          fontSize: "20px",
        }}
      />
    );
  }
  return (
    <div className="infoCard">
      <div className="infoCard__intro">
        <div>
          <p className="infoCard__title">{title}</p>
          <p className="infoCard__name">{name}</p>
        </div>
        <Avatar src={photo} />
      </div>
      <div className="infoCard__summery">
        <p>
          Total Budget{" "}
          <span className="inforCard__text infoCard_numbers">
            {budget}
            <EuroIcon fontSize="10px" />
          </span>
        </p>
        <p>
          Profitability(100%){" "}
          <span
            className={`inforCard__text infoCard_numbers ${
              color === "red" && "infoCard__red"
            }`}
          >
            {profit}
            <EuroIcon fontSize="10px" />
            <span>{sign && sign}</span>
          </span>
        </p>

        <div  className="info__meter"   >
          <p style={{width:`${meter}%`,backgroundColor:color,height:'11px',borderRadius:'5px'}}></p>
        </div>
        <div className="infoCard__meter">
          <p className="inforCard__text">Actual Hours: 1100</p>
          <p
            className={`inforCard__text ${color === "red" && "infoCard__red"}`}
          >
            {hoursMsg}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
