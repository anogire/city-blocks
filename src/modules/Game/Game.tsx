import React from "react";
import { useSelector } from "react-redux";
import { Board } from "../../components/Board";
import { RandomBlocks } from "../../components/NewRandomBlocks";
import { selectStatus } from "../../store/selectors";
import { Menu } from "../Menu";

import './style.css';

export const Game: React.FC = () => {
    const status = useSelector(selectStatus);
  
    return (
      <div className="main"> 
        <h1>City-Blocks</h1>
        <Menu />
        <div className="boardContainer">
          {(status === "playing") && <RandomBlocks />}
          {(status === "playing") && <Board />}
        </div>
      </div>
    );
  }