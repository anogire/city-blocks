import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Board } from "../../components/Board";
import { NextBlocks } from "../../components/NextBlocks";
import { Overlay, Portal } from "../../components/Overlay";
import { Score } from "../../components/Score";
import { Menu } from "../Menu";

import './style.css';

export const Game: React.FC = () => {
  const status = useSelector(selectStatus);
  
  return (
    <div className="main"> 
      <h1>City-Blocks</h1>
      <div>
        <div className="menuContainer">
          {(status === "playing") && <Score />}
          <Menu />
        </div>
        <div className="boardContainer" id="overlay">
          <Portal>
            <Overlay isVisible={status === "game over"} />
          </Portal>
          {(status === "playing") && <NextBlocks />}
          {(status !== "not active") && <Board />}
        </div>
      </div>
    </div>
  );
}