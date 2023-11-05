import { useEffect, useState } from "react";
import Styles from "./App.module.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/image/coins.png", matched: false },
  { src: "/image/wheel.png", matched: false },
  { src: "/image/island.png", matched: false },
  { src: "/image/ship.png", matched: false },
  { src: "/image/treasure.png", matched: false },
  { src: "/image/treasureMap.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns)=>prevTurns+1);
  }

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCard =>{
          return(
            prevCard.map((card)=>{
              if(card.src === choiceOne.src){
                return({...card, matched:true})
              }else{
                return card;
              }
            })
          )
        })
        resetTurn();
    }else{
      
      setTimeout(()=>resetTurn(), 1000)
    }
  }
  },[choiceOne,choiceTwo]);
  console.log(cards)


  return (
    <div className={Styles.app}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} className={Styles.button}>
        <h3>New Game</h3>
      </button>
      <div className={Styles.card__grid}>
        {cards.map((card) => (
          <SingleCard 
            card={card} 
            key={card.id} 
            handleChoice={handleChoice}
            flipped={card===choiceOne || card===choiceTwo || card.matched}
            
            />
        ))}
      </div>
      <div className={Styles.counter}>{turns}</div>
    </div>
  );
}

export default App;
