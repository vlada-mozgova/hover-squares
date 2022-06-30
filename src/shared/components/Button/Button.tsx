import React from "react";
import "./Button.scss";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export const Button: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} className={`button`}>
      {disabled ? "Start" : "Stop"}
    </button>
  );
};
