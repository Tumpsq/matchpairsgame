import React from "react";
import CardBack from "../assets/img/CardBack.png";

const Card = ({ card, handleFlipCard }) => {
  return (
    <div
      className={`Card ${card.flipped && "Flipped Disable-click-events"}`}
      onClick={() => {
        handleFlipCard(card.id);
      }}
    >
      <img className="Card-front" src={CardBack} alt="" />
      <div className="Card-back">{card.icon}</div>
    </div>
  );
};

export default Card;
