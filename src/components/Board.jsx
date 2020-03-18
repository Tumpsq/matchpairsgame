import React from "react";
import Card from "./Card";

const Board = ({ cards, handleFlipCard }) => {
  return (
    <div className="Board">
      {cards.map(card => (
        <Card key={card.id} card={card} handleFlipCard={handleFlipCard} />
      ))}
    </div>
  );
};

export default Board;
