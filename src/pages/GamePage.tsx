import React from "react";
import { FrontBar } from "./FrontBar/FrontBar";
import "./GamePage.scss";
import { SideBar } from "./SideBar/SideBar";

export const GamePage: React.FC = () => {
  return (
    <div className="gamePage">
      <FrontBar />
      <SideBar />
    </div>
  );
};
