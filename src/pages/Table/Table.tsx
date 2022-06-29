import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Square } from "./Square";
import "./Table.scss";

export const Table: React.FC = () => {
  const level = useAppSelector((state) => state.level.level);
  const hover = useAppSelector((state) => state.level.hover);

  return (
    <div className="board">
      <table>
        <tbody>
          {Array.from({ length: level.field }, (_, i) => (
            <Square
              key={i}
              count={level.field}
              hover={hover.filter((item) => item.row === i)}
              row={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
