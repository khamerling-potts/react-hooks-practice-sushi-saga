import React, { useState } from "react";

function Sushi({ sushi, onEaten, remaining }) {
  const [eaten, setEaten] = useState(false);

  function handleEaten() {
    if (sushi.price <= remaining) {
      setEaten((eaten) => !eaten);
      onEaten(sushi);
    }
  }
  return (
    <div className="sushi" onClick={handleEaten}>
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name + "Sushi"} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
