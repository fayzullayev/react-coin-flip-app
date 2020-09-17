import React, { useState } from "react";
import Coin from "./Coin";

import "./App.css";

function App() {
  const [state, update] = useState({
    flipping: false,
    coin: null,
    heads: 0,
    tails: 0,
    total: 0,
  });

  const flip = () => {
    let randCoin = Math.floor(Math.random() * 2) + 1;
    if (randCoin === 1) {
      update((oldState) => ({
        ...oldState,
        flipping: true,
        heads: oldState.heads + 1,
        total: oldState.total + 1,
      }));
    } else if (randCoin === 2) {
      update((oldState) => ({
        ...oldState,
        flipping: true,
        tails: oldState.tails + 1,
        total: oldState.total + 1,
      }));
    }

    setTimeout(() => {
      update((oldState) => ({
        ...oldState,
        flipping: false,
        coin: randCoin,
      }));
    }, 500);
  };

  return (
    <div className="App">
      <Coin flipping={state.flipping} coin={state.coin} />
      <br />
      <p>
        Out of {state.total} flips, there have been {state.heads} heads and 
        {state.tails} tails.
      </p>
      <button onClick={flip}>Flip Meee</button>
    </div>
  );
}

export default App;
