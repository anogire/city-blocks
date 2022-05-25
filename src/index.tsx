import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { Game } from "./modules/Game";
import { store } from "./store";

import './index.css';

const App: React.FC = () =>  {
  
  return (
      <Provider store={store}>
        <Game />
      </Provider>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);