import { useState } from "react";
import Styles from "./App.module.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/image/coins.png" },
  { src: "/image/wheel.png" },
  { src: "/image/island.png" },
  { src: "/image/ship.png" },
  { src: "/image/treasure.png" },
  { src: "/image/treasureMap.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(card);
  }

  return (
    <div className={Styles.app}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} className={Styles.button}>
        <h3>New Game</h3>
      </button>
      <div className={Styles.card__grid}>
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  );
}

export default App;
