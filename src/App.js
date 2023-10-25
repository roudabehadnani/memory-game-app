import { useState } from "react";
import Styles from "./App.module.css";


const cardImages = [
  {"src":"image/coins.jpg"},
  {"src":"image/wheel.jpg"},
  {"src":"image/island.jpg"},
  {"src":"image/ship.jpg"},
  {"src":"image/treasure.jpg"},
  {"src":"image/treasureMap.jpg"},
]

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);


  const shuffleCards =() =>{
    const shuffleCards = [...cardImages,...cardImages]
    .sort(()=>(Math.random() - 0.5))
    .map((card)=>({...card, id:Math.random()}))
  
  setCards(shuffleCards);
  setTurns(0);

  }
  return (
    <div className={Styles.app}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} className={Styles.button}>
        <h3>New Game</h3>
      </button>
    </div>
  );
}

export default App;
