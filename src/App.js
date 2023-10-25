import Styles from "./App.module.css";

function App() {
  return (
    <div className={Styles.app}>
      <h1>Magic Match</h1>
      <button className={Styles.button}>
        <h3>New Game</h3>
      </button>
    </div>
  );
}

export default App;
