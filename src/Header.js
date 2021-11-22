import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MT5BnOA3gRsuDehd27ml7Y3YiAOLJYF-_3xkW30hqORvVRnLVQLQZ5zVDOf_CVEPo3o&usqp=CAU"
          alt="Logo"
        />

        <div className="header_serach">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://image.freepik.com/free-vector/people-happy-face-man-with-glasses-icon_24640-19224.jpg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
