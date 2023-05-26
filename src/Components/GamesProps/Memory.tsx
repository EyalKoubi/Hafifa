import "../../CSS/App.css";
import Cards from "./Cards";

function Memory() {
  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Game of Animals</h1>

      <Cards />

      <button className="reset-button" onClick={resetGame}>
        Start Over
      </button>
    </div>
  );
}

export default Memory;
