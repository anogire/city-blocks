import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Board } from "../../components/Board";
import { NextBlocks } from "../../components/NextBlocks";
import cn from "classnames";

import './style.css';

export const Game: React.FC = () => {
  const status = useSelector(selectStatus);
  
  return (
    <div className={cn("board-container", {"board-container_not-active": status !== "playing",})}>
      <NextBlocks />
      <Board />
    </div>
  );
}