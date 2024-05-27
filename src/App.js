import { useEffect, useState } from "react";
import Styles from "./App.module.css";
import SingleCard from "./components/SingleCard";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import SignCard from "./components/SignCard";

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
  const [disabled, setDisabled] = useState(false);
  const [pairedCards, setPairedCards] = useState(0);
  const[showConfetti, setShowConfetti] = useState(false);
  const {width, height} = useWindowSize();

  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns)=>prevTurns+1);
    setDisabled(false);
  }

  const countPairedCards = () => {
    setPairedCards((prevPairedCards)=>prevPairedCards+1);    
    if(pairedCards+1===cards.length/2){
      console.log("You won!");  
      setShowConfetti(true); 
    }
  }

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setPairedCards(0);
    setShowConfetti(false);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

//compare 2 selected cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
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
        countPairedCards();
      }else{     
        setTimeout(()=>resetTurn(), 1000)
      }
    }
  },[choiceOne,choiceTwo]);

  //
  useEffect(()=>{
    setTimeout(()=>setShowConfetti(false),8000)
  },[showConfetti])

//start new game automatically
  useEffect(()=>{
    shuffleCards();
  },[])

  return (
    <div className={Styles.app}>
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={400}/>}
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
            disabled={disabled}
            />
        ))}
      </div>
      <div>
        <div className={Styles.counter}>Turns: {turns}</div>
        <div className={Styles.counter}>Matched: {pairedCards}</div>
      </div>
      {/* <div className={Styles.counter}>Turns: {turns}</div>
      <div className={Styles.counter}>Matched: {pairedCards}</div>
      <SignCard/> */}
    </div>
  );
}

export default App;
