import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { updateHover } from "../../redux/slices/levelSlice";
import { Hover } from "../types";
import "./Table.scss";

interface Props {
  count: number;
  row: number;
  hover: Hover[];
}

export const Square: React.FC<Props> = ({ count, row, hover }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="squareRow">
      {Array.from({ length: count }, (_, col) => {
        let hoverItem: Hover = { row: row, col: 0, hover: false };
        hover.filter((item) => (item.col === col ? (hoverItem = item) : item));
        return (
          <div
            key={col}
            onMouseOver={() => {
              dispatch(updateHover({ row: row, col: col }));
            }}
            className={`square row-${count} ${
              hoverItem.hover ? "hoverUp" : "hoverDown"
            }`}
          >
            01
          </div>
        );
      })}
    </div>
  );
};
