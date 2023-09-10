import board from "../assets/icons/board.svg";
import schedule from "../assets/icons/schedule.svg";
import messages from "../assets/icons/messages.svg";
import team from "../assets/icons/team.svg";
import tools from "../assets/icons/tools.svg";
import roadmap from "../assets/icons/roadmap.svg";
import settings from "../assets/icons/settings.svg";
import reporting from "../assets/icons/reporting.svg";
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    href: "/",
    title: "Board",
    icon: board,
  },
  {
    href: "schedule",
    title: "Plan Schedule",
    icon: schedule,
  },
  {
    href: "reporting",
    title: "Reporting",
    icon: reporting,
  },
  {
    href: "messages",
    title: "Messages",
    icon: messages,
  },
  {
    href: "teams",
    title: "Team Member",
    icon: team,
  },
  {
    href: "plugins",
    title: "Tools Plugin",
    icon: tools,
  },
  {
    href: "roadmap",
    title: "Roadmap",
    icon: roadmap,
  },
  {
    href: "settings",
    title: "Settings",
    icon: settings,
  },
];

export default function Mobilesidebar() {
  return (
    <div
      id="mobileSidebar"
      className="bg-white p-2 gap-2 shadow"
      style={{
        width: "fit-content",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: "3.8rem",
        zIndex: 50,
      }}
    >
      <nav className="d-flex flex-column gap-2">
        {navlinks.map((navLink) => (
          <NavLink
            to={`${navLink.href}`}
            className="d-flex gap-3 align-items-center p-2"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 500 : "",
                color: isActive ? "white" : "#707276",
                backgroundColor: isActive ? "#00B0D7" : "white",
                borderRadius: isActive ? "10px" : "",
              };
            }}
          >
            <img
              src={navLink.icon}
              alt={`${navLink.title} icon`}
              style={{
                width: "1rem",
              }}
            />
            <span className="">{navLink.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
