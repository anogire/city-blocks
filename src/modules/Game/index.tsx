import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Board } from "../../components/Board";
import { NextBlocks } from "../../components/NextBlocks";
import './style.css';

const classNames = require('classnames');

export const Game: React.FC = () => {
  const status = useSelector(selectStatus);
  const gameClasses = classNames("board-container", status && "playing", !status && "board-container_not-active");
  
  return (
    <div className={gameClasses}>
      <NextBlocks />
      <Board />
    </div>
  );
}