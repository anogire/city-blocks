import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";
import { SoundContainer } from "../../components/Sound";

import './style.css';
import { SoundProvider } from "../../components/Sound/SoundContext";

export const App: React.FC = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="main">
        <div id="overlay" className="game">
          <SoundProvider>
            <h1>City-Blocks</h1>
            <Portal>
              <GameOver isVisible={status === "game over"} />
              <JokerStore isVisible={status === "store"} />
            </Portal>
              {(status === "not active") && <Menu />}
              {(status === "playing")
              && <>
                <Game />
                <Score />
                <Joker />
                <Exit />
              </>
              }
            <SoundContainer />
          </SoundProvider>
        </div>    
    </div>
  );
}