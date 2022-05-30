import React from "react";
import { useSelector } from "react-redux";
import { selectMoney, selectScore, selectStatus } from "../../store";
import { Menu } from "../Menu";
import { Game } from "../Game";
import { JokerStore, GameOver, Portal } from "../../components/Overlay";
import { Score } from "../../components/Score";
import { Joker } from "../../components/Joker";
import { Exit } from "../../components/Exit";

import './style.css';

export const App: React.FC = () => {
  const status = useSelector(selectStatus);
  const score = useSelector(selectScore);
  const money = useSelector(selectMoney);

  const [isMoneyChanged, setIsMoneyChanged] = React.useState(score);

  React.useEffect(() => {
    setIsMoneyChanged(money);
  }, [money]);

  const isMoneyIncrease = money > isMoneyChanged;
  const startForNewBonus = React.useMemo(() => (score <= 100) ? 0 : score, [isMoneyIncrease]);

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
                <Score score={score} min={startForNewBonus} max={startForNewBonus + 100}/>
                <Joker />
                <Exit />
              </>}
        </div>    
    </div>
  );
}