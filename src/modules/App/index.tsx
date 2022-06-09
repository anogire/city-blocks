import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../../store";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";
import { SoundContainer, SoundProvider } from "../../components/Sound";

import './style.css';

export const App: React.FC = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="main">
        <div id="overlay" className="game">
          <SoundProvider>
            <Portal>
              <GameOver isVisible={status === "game over"} />
              <JokerStore isVisible={status === "store"} />
            </Portal>
              {(status === "not active") && <Menu />}
              {(status !== "not active") && <Game />}
              {(status === "playing")
              && <>
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