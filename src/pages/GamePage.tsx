import React from "react";
import "./GamePage.scss";
import { FrontBar } from "./FrontBar";
import { SideBar } from "./SideBar/SideBar";

export const GamePage: React.FC = () => {
  return (
    <div className="gamePage">
      <FrontBar />
      <SideBar />
    </div>
  );
};
