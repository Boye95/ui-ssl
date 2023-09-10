// sort and filter button icons import
import plus from "../assets/icons/plus.svg";
import settings from "../assets/icons/settings.svg";
import ham from "../assets/icons/ham.svg";
import sort from "../assets/icons/sort.svg";

// card mock imports
import phone from "../assets/mocks/phone.svg";
import pc from "../assets/mocks/pc.svg";
import web from "../assets/mocks/web.svg";
import pie from "../assets/mocks/pie.svg";
import earphone from "../assets/mocks/earphone.svg";
import camera from "../assets/mocks/camera.svg";
import book from "../assets/mocks/book.svg";
import wallet from "../assets/mocks/wallet.svg";
import more from "../assets/icons/more.svg";
import clock from "../assets/icons/clock.svg";
import location from "../assets/icons/location.svg";
import avatarOne from "../assets/image.png";

const cardDetails = [
  {
    mock: phone,
    mockBgColor: "#EA5B92",
    title: "App Development",
    team: "Marketing Team",
    timeLeft: "1 Week Left",
    teamMembersAvatar: [avatarOne, avatarOne, avatarOne],
    progress: "34%",
  },
  {
    mock: pc,
    mockBgColor: "#14C3A4",
    title: "Web Instructors",
    team: "Marketing Team",
    timeLeft: "4 Week Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "14%",
  },
  {
    mock: web,
    mockBgColor: "#4F96F7",
    title: "Web3 Managers",
    team: "Marketing Team",
    timeLeft: "5 Days Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "28%",
  },
  {
    mock: pie,
    mockBgColor: "#FA8035",
    title: "Data Analysis",
    team: "Marketing Team",
    timeLeft: "2 Weeks Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "22%",
  },
  {
    mock: wallet,
    mockBgColor: "#D189E1",
    title: "Pay Stack",
    team: "Big Data Dev",
    timeLeft: "14 Weeks Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "55%",
  },
  {
    mock: book,
    mockBgColor: "#FB8135",
    title: "Data Managers",
    team: "Over Look",
    timeLeft: "15 Weeks Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "29%",
  },
  {
    mock: camera,
    mockBgColor: "#7EBCE2",
    title: "Cinematography",
    team: "Main Stream",
    timeLeft: "2 Days Left",
    teamMembersAvatar: [avatarOne, avatarOne],
    progress: "4%",
  },
  {
    mock: earphone,
    mockBgColor: "#E65A8F",
    title: "Feed Back",
    team: "Customer Relation",
    timeLeft: "3 Weeks Left",
    teamMembersAvatar: [avatarOne, avatarOne, avatarOne],
    progress: "32%",
  },
];

export default function Reporting() {
  return (
    <div id="reporting" className="">
      <div id="reportingHeader" className="p-2 d-flex justify-content-between">
        <div className="headTexts">
          <h5 className="fw-bold ">Reporting</h5>
          <p className="">All projects in current month</p>
        </div>
        <div
          id="add"
          className="d-flex align-items-center justify-content-center"
        >
          <img src={plus} alt="" className="icon" />
        </div>
      </div>

      <div className="d-flex flex-column gap-5 mt-3">
        <div id="controls" className="">
          <div className="d-flex gap-3 flex-wrap">
            <div className="select d-flex gap-2 align-items-center ">
              <span className="">All</span>
              <span className="count active">50</span>
            </div>
            <div className="select d-flex gap-2 align-items-center">
              <span className="">Started</span>
              <span className="count">20</span>
            </div>
            <div className="select d-flex gap-2 align-items-center">
              <span className="">Approval</span>
              <span className="count">12</span>
            </div>
            <div className="select d-flex gap-2 align-items-center">
              <span className="">Finished</span>
              <span className="count">17</span>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="select more d-flex gap-2 align-items-center px-3">
              <img
                src={settings}
                alt=""
                style={{
                  width: "1rem",
                }}
              />
              <span className="">More</span>
            </div>
            <div className="count active">
              <img src={sort} alt="" className="" />
            </div>
            <div className="count">
              <img src={ham} alt="" className="" />
            </div>
          </div>
        </div>

        <div id="cards" className="p-3">
          {cardDetails.map((card, index) => (
            <div
              id="card"
              className="position-relative d-flex align-items-center flex-column bg-white row"
              key={index}
            >
              <div
                className="d-flex align-items-center justify-content-center position-absolute"
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                  backgroundColor: card.mockBgColor,
                  boxShadow: `0 5px 10px ${card.mockBgColor}`,
                  top: "-25px",
                  left: "20px",
                }}
              >
                <img src={card.mock} alt="" className="" />
              </div>

              <div className="">
                <div id="upper" className="d-flex flex-column gap-1 pb-4">
                  <div className="fw-bold">{card.title}</div>
                  <div className="d-flex gap-2">
                    <img src={location} alt="" className="" />
                    <span className="">{card.team}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={clock} alt="" className="" />
                    <span className="">{card.timeLeft}</span>
                  </div>
                </div>

                <div id="lower" className="d-flex gap-3 pt-4">
                  <div className="d-flex flex-column gap-2">
                    <span className="">Team Members</span>
                    <div className="d-flex gap-2">
                      {card.teamMembersAvatar.map((member, index) => (
                        <img src={member} key={index} alt="" className="icon" />
                      ))}
                      <img src={more} alt="" className="icon" />
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <span className="">Progress</span>
                    <span className="">{card.progress}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
