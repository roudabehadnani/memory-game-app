import React from "react";
import Styles from "./SingleCard.module.css";

function SingleCard({card, handleChoice}) {

  const handleClick = () => {
    handleChoice(card);
  }
  return (
    <div className={Styles.card}>
      <img src={card.src} className={Styles.frontImage} alt="front of card" />
      <img src="/image/cover.png" className={Styles.coverImage} alt="cover of card" onClick={handleClick} />
    </div>
  );
}

export default SingleCard;
