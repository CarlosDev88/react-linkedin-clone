import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/6QpKgim9qMgGK8QG2a6gaC/2de28b955c0cf902004fecd1a1e62bee/sub-category-1.jpg?fit=fill&w=368&h=207"
          alt="background"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Your name</h2>
        <h4>yourmail@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,5</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">3,2</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>

        {recentItem("React js")}
        {recentItem("Node js")}
        {recentItem("Mongo DB")}
        {recentItem("Software")}
      </div>
    </div>
  );
}

export default Sidebar;
