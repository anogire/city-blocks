import React from 'react';
import styles from './App.module.css';
import { useAppSelector } from './app/hooks';
import { selectStatus } from './components/gameControl';
import { Board } from './components/Board';
import { RandomBlocks } from './components/RandomBlocks';
import { ControlPanel } from './components/ControlPanel';


export const App: React.FC = () => {
  const status = useAppSelector(selectStatus);

  return (
    <div className={styles.main}> 
      <h1>City-Blocks</h1>
      <ControlPanel />
      <div className={styles.boardContainer}>
        {(status === "playing") && <RandomBlocks />}
        {(status === "playing") && <Board />}
      </div>
    </div>
  );
}