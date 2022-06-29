import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrowUp.svg";
import { Level } from "../../pages/types";
import "./DropDown.scss";

interface Props {
  levels: Array<Level>;
  setLevel: React.Dispatch<React.SetStateAction<Level>>;
  disabled: boolean;
  label: string;
}

export const DropDown: React.FC<Props> = ({
  levels,
  setLevel,
  disabled,
  label,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (disabled) {
      setOpen(false);
      setLevel({ name: "Pick mode", field: 0 });
    }
  }, [disabled]);

  return (
    <div className="dropDown">
      <div
        className={`dropDownHeader ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && setOpen(!open)}
      >
        <div>{label}</div>
        {open ? (
          <ArrowUp className="iconArrow" />
        ) : (
          <ArrowDown className="iconArrow" />
        )}
      </div>
      {open ? (
        <div className="dropDownList">
          {levels.map((level, index) => (
            <div
              key={index}
              className="dropDownRow"
              onClick={() => {
                setLevel(level);
                setOpen(!open);
              }}
            >
              {level.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
