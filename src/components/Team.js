import { Avatar } from "@mui/material";
import React from "react";

import "./Team.css";

const avatar =
  "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=2000";

const avatar1 =
  "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png";

const avatar2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp0DvAJeJVaSk6b22GpPfD67TEr4whFqF7tdcxbtMYQ&s";

const avatar3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnev9YqAXh1bpweBdkgilRwXNMF4g702qG4OaKx7X4tg&s";

const avatar4 =
  "https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000";

const teamMember = [
  {
    id: 1,
    name: "Andrea",
    field: "UX Junior",
    photo: avatar,
    performance: 2,
    emoji: "😠",
  },
  {
    id: 2,
    name: "Alvaro",
    field: "Back end developer",
    photo: avatar1,
    performance: 5,
    emoji: "🙂 ",
  },
  {
    id: 3,
    name: "Juan",
    field: "Ux Senior",
    photo: avatar2,
    performance: 4,
    emoji: "😐",
  },
  {
    id: 4,
    name: "Jose",
    field: "Marketing",
    photo: avatar3,
    performance: 1,
    emoji: "😡",
  },
  {
    id: 5,
    name: "Maria",
    field: "UX Junior",
    photo: avatar4,
    performance: 3,
    emoji: "😐",
  },
];
function Team() {
  return (
    <div className="team">
      <p>Team mood</p>
      {teamMember.map((member) => (
        <div key={member.id}>
          <div className="team__members">
            <Avatar
              alt="Remy Sharp"
              src={member.photo}
              sx={{ width: 30, height: 30 }}
            />
            <div className="team__detail">
              <p className="team_info team__name">{member.name}</p>
              <p className="team__info team__field">{member.field}</p>
            </div>
          </div>

          <hr className="team__meter" />
          <p
            className="team__logo"
            style={{
              display: "relative",
              left: `${member.performance * 28}px`,
            }}
          >
            {member.emoji}
          </p>
          <hr className="team__line" />
        </div>
      ))}
    </div>
  );
}

export default Team;
