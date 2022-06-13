import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContinueGameAction, selectStatus } from "../../store";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { SoundContainer, SoundProvider } from "../../components/Sound";
import { ProgressiveImage } from "../../components/ProgressiveImage";

import './style.css';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(createContinueGameAction());
  }, [dispatch]);

  const status = useSelector(selectStatus);

  return (
    <div className="main">
      <ProgressiveImage
        src="./images/back.jpeg"
        placeholderSrc="./images/back_ph.jpeg"
        className="back-image"
        width="100%"
        height="100%"
      />
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