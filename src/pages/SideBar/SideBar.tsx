import React from "react";
import { useAppSelector } from "../../redux/hooks";
import "../GamePage.scss";
import "./SideBar.scss";
import { SideRow } from "./SideRow";

export const SideBar: React.FC = () => {
  const hover = useAppSelector((state) =>
    state.level.hover.filter((item) => item.hover)
  );

  return (
    <div className="sideBar">
      <h2>Hover squares</h2>
      <div className="sideBarList">
        {hover.length ? (
          hover.map((item, index) => <SideRow key={index} hover={item} />)
        ) : (
          <p>no selection</p>
        )}
      </div>
    </div>
  );
};
