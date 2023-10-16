import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [eatenSushi, setEatenSushi] = useState([]);

  const spent = eatenSushi.reduce((acc, plate) => acc + plate.price, 0);
  const remaining = 100 - spent;

  function handleEaten(sushi) {
    setEatenSushi([...eatenSushi, sushi]);
  }

  return (
    <div className="app">
      <SushiContainer API={API} onEaten={handleEaten} remaining={remaining} />
      <Table plates={eatenSushi} remaining={remaining} />
    </div>
  );
}

export default App;
