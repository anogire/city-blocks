import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Board } from "../../components/Board";
import { NextBlocks } from "../../components/NextBlocks";

import './style.css';

export const Game: React.FC = () => {
  const status = useSelector(selectStatus);
  
  return (
    <div className="board-container">
      {(status === "playing") && <NextBlocks />}
      {(status !== "not active") && <Board />}
    </div>
  );
}