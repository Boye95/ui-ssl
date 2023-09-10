import { NavLink } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { BsCalendarEvent } from "react-icons/bs";
import { BiSolidReport, BiMessage } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { GiHorizonRoad } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";

const navlinks = [
  {
    href: "/",
    title: "Board",
    icon: <RxDashboard size={20} />,
  },
  {
    href: "schedule",
    title: "Plan Schedule",
    icon: <BsCalendarEvent size={20} />,
  },
  {
    href: "reporting",
    title: "Reporting",
    icon: <BiSolidReport size={20} />,
  },
  {
    href: "messages",
    title: "Messages",
    icon: <BiMessage size={20} />,
  },
  {
    href: "teams",
    title: "Team Member",
    icon: <RiTeamLine size={20} />,
  },
  {
    href: "plugins",
    title: "Tools Plugin",
    icon: <HiGlobeEuropeAfrica size={20} />,
  },
  {
    href: "roadmap",
    title: "Roadmap",
    icon: <GiHorizonRoad size={20} />,
  },
  {
    href: "settings",
    title: "Settings",
    icon: <LuSettings2 size={20} />,
  },
];

export default function Sidebar() {
  return (
    <div id="sidebar" className="bg-white p-1 gap-5">
      <div className="logo gap-2 fw-bold">
        <span className="logoDot bg-info"></span>
        <span className="logoText">Compute</span>
      </div>

      <nav className="d-flex flex-column gap-4">
        {navlinks.map((navLink, index) => (
          <NavLink
            to={`${navLink.href}`}
            className="d-flex gap-3 align-items-center p-2"
            key={navLink.title}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 500 : "",
                color: isActive ? "white" : "#707276",
                backgroundColor: isActive ? "#00B0D7" : "white",
                borderRadius: isActive ? "10px" : "",
              };
            }}
          >
            {navLink.icon}

            <span className="">{navLink.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
