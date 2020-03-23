import React from "react";

const FlipCounter = ({ flipCount }) => {
  return (
    <div className="Flip-counter">
      <div>FLIP COUNT</div>
      <div className="Flip-count">{flipCount}</div>
    </div>
  );
};

export default FlipCounter;
