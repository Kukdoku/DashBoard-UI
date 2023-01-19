import StatusCard from "./components/StatusCard";

import Team from "./components/Team";
import LineGraph from "./components/LineGraph";
import Budget from "./components/Budget";
import MyNav from "./components/MyNav";
import PieGraph from "./components/PieGraph";
import InfoCard from "./components/InfoCard";

import "./App.css";

const img =
  "https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg";

const profileImg =
  "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?cs=srgb&dl=pexels-ali-pazani-2625122.jpg&fm=jpg";

function App() {
  return (
    <div className="app">
      <MyNav profileImg={profileImg} />
      <div className="app__content">
        <div className="app__information">
          <div className="app__info__left">
            <div className="app__status__card">
              <StatusCard
                iconsName="GridViewIcon"
                text="Total Projects"
                number={5}
              />

              <StatusCard
                iconsName="CheckCircleOutlineIcon"
                text="Completed"
                number={1}
              />

              <StatusCard iconsName="CachedIcon" text="Ongoing" number={3} />

              <StatusCard iconsName="GppGoodIcon" text="Delayed" number={1} />

              <StatusCard
                iconsName="PeopleAltIcon"
                text="Employees"
                number={5}
              />
            </div>
            <div className="app_graph__card">
              <LineGraph />
              <PieGraph />
            </div>
          </div>
          <div className="app__team">
            <Team />
          </div>
        </div>
        <div>
          <Budget />
          <div className="app__info__card">
            <InfoCard
              title="Insurance App"
              name="Verti"
              budget={70000}
              profit={-2500}
              hoursMsg="100 hours over Budget!"
              meter={100}
              photo={img}
              color="#E50000"
            />
            <InfoCard
              title="Neo"
              name="Bankia"
              budget={70000}
              profit={4000}
              meter={50}
              hoursMsg="1000 sold hours"
              photo={img}
              color="#E09300"
            />
            <InfoCard
              title="AR Website"
              name="Barca"
              budget={70000}
              profit={4000}
              meter={50}
              hoursMsg="2000 sold hours"
              photo={img}
              color="#007F77"
            />
            <InfoCard
              title="VR Website"
              name="Barca"
              budget={70000}
              profit={4000}
              meter={100}
              hoursMsg="4000 sold hours"
              photo={img}
              color="#007F77"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
