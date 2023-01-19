import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import "./budget.css";

function Budget() {
  const [active, setActive] = useState("new");
  return (
    <div className="budget">
      <h4>Budget Status</h4>

      <button
        className={`budget__button ${active === "new" && "active"}`}
        onClick={(e) => {
          setActive("new");
        }}
      >
        <AddIcon /> Add New Project
      </button>
      <button
        className={`budget__button ${active === "download" && "active"}`}
        onClick={(e) => {
          setActive("download");
        }}
      >
        <SystemUpdateAltIcon /> Download Report
      </button>
      <button
        className={`budget__button ${active === "date" && "active"}`}
        onClick={(e) => {
          setActive("date");
        }}
      >
        <EventNoteIcon /> dd/mm/yyyy-dd/mm/yyyy
      </button>
      <button
        className={`budget__button ${active === "filter" && "active"}`}
        onClick={(e) => {
          setActive("filter");
        }}
      >
        <ViewHeadlineIcon /> Filter
      </button>
    </div>
  );
}

export default Budget;
