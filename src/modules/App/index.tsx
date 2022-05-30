import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";

import './style.css';

export const App: React.FC = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="main">
        <div id="overlay" className="game"> 
            <h1>City-Blocks</h1>
            <Portal>
                <GameOver isVisible={status === "game over"} />
                <JokerStore isVisible={status === "store"} />
            </Portal>
            {(status === "not active" || status === "game over") && <Menu />}
            {(status === "playing")
            && <>
                <Game />
                <Score />
                <Joker />
                <Exit />
              </>}
        </div>    
    </div>
  );
}