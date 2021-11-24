import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus : updates", "Top news - 886 readers")}
      {newsArticle("Deno improves JSX transform", "Top news - 1300 readers")}
      {newsArticle(
        "Node.js arrives with more promise",
        "Top news - 5698 readers"
      )}
      {newsArticle("React Native Best Practices", "Top news - 654 readers")}
      {newsArticle("Flutter Vs React Native", "Top news - 12365 readers")}
    </div>
  );
}
