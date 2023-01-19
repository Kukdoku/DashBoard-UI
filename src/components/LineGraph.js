import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import EuroIcon from "@mui/icons-material/Euro";
import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";

import "./lineGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = [
  "19 June",
  "20 June",
  "21 June",
  "22 June",
  "23 June",
  "24 June",
  "25 June",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 7000 })),
      borderColor: "#6FA79F",
      backgroundColor: "#6FA79F",
    },
  ],
};

export default function LineGraph() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="linegraph">
      <div className="linegraph__info">
        <div>
          <p>Total Revenue</p>
        </div>

        <p>
          <span className="left">Month</span>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            control={
              <Switch
                checked={visible}
                onChange={() => setVisible(!visible)}
              />
            }
          />
          <span className="right">Week</span>
        </p>
      </div>
      <p>
        cost <EuroIcon fontSize="10px" />
      </p>
      <Line options={options} data={data} className="line__graph__canvas" />
    </div>
  );
}
