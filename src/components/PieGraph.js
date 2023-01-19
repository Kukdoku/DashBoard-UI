import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Badge, FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";

import "./pieGraph.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [19, 48, 33],
      backgroundColor: ["#E60000", "#00DDC5", "#758DD2"],
      borderColor: ["#E60000", "#00DDC5", "#758DD2"],
      borderWidth: 2,
    },
  ],
};

export default function PieGraph() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="pieGraph">
      <div className="pieGraph__header">
        <p>Budget</p>
        <p className="piegraph__toggle">
          <span className="left">Profitability</span>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            control={
              <Switch
                checked={visible}
                onChange={() => setVisible(!visible)}
              />
            }
          />
          <span className="right">Status</span>
        </p>
      </div>
      <div className="pieGraph__donat">
        <div className="pieGraph__projects">
          <h6>5</h6>
          <p>Total Projects</p>
        </div>

        <Doughnut data={data} className="piegraph__implement" />
      </div>
      <div className="pieGraph__points">
        <Badge variant="dot" className="dot red">
          🔴 Over Budget
        </Badge>
        <Badge variant="dot" className="dot blue">
          🟢 On Budget
        </Badge>
        <Badge variant="dot" className="dot green">
          🟣 Under Budget
        </Badge>
      </div>
    </div>
  );
}
