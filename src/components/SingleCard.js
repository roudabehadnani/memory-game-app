import React from "react";
import "./SingleCard.css"
// import Styles from "./SingleCard.module.css";

function SingleCard({card, handleChoice, flipped}) {

  const handleClick = () => {
    handleChoice(card);
  }
  return (
    <div className="card">
    <div className={flipped ? "flipped" : "" }>
      <img src={card.src} className="frontImage" alt="front of card" />
      <img src="/image/cover.png" className="coverImage" alt="cover of card" onClick={handleClick} />
    </div>
    </div>
  );
}

export default SingleCard;
