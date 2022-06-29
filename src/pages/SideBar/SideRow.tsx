import React from "react";
import { Hover } from "../types";
import "./SideBar.scss";

interface Props {
  hover: Hover;
}

export const SideRow: React.FC<Props> = ({ hover }) => {
  return (
    <div className="sideRow">{`row ${hover.row + 1} col ${hover.col + 1}`}</div>
  );
};
