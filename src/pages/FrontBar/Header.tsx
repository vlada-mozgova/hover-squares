import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeLevel, setHover } from "../../redux/slices/levelSlice";
import { Button } from "../../shared/components/Button/Button";
import { DropDown } from "../../shared/components/DropDown/DropDown";
import { Level } from "../types";
import "../GamePage.scss";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const levels = useAppSelector((state) => state.level);
  const [level, setLevel] = useState<Level>({ name: "Pick mode", field: 0 });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (level) {
      dispatch(changeLevel(level));
      dispatch(setHover(level.field));
    }
  }, [level]);

  const onClick = () => setDisabled(!disabled);

  return (
    <div className="header">
      <DropDown
        levels={levels.data}
        setLevel={setLevel}
        disabled={disabled}
        label={level.name}
      />
      <Button onClick={onClick} disabled={disabled} />
    </div>
  );
};
