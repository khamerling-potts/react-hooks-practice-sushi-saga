import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ API, onEaten, remaining }) {
  const [offset, setOffset] = useState(0);
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setSushis(data));
  }, []);

  const sushiToDisplay = sushis.slice(offset, offset + 4);
  const sushiArray = sushiToDisplay.map((sushi) => (
    <Sushi
      key={sushi.id}
      sushi={sushi}
      onEaten={onEaten}
      remaining={remaining}
    />
  ));

  function handleMoreClick() {
    setOffset((offset) => offset + 4);
  }

  return (
    <div className="belt">
      {sushiArray}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
