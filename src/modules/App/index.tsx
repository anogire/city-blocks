import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContinueGameAction, selectStatus } from "../../store";
import { getStorageData } from "../../store/helpers";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { SoundContainer, SoundProvider } from "../../components/Sound";

import './style.css';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    const savedGame = getStorageData().game ?? {};
    if (savedGame) {
      const action = createContinueGameAction();
      dispatch(action);
    }

  }, [dispatch]);

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