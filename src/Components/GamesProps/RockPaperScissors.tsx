import React, { useState } from "react";
import "../../CSS/GamesProps/RockPaperScissors.css";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice: any) => {
    setPlayerChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    determineResult(randomChoice);
  };

  const determineResult = (computerChoice: any) => {
    if (playerChoice === computerChoice) {
      setResult("tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("win");
    } else {
      setResult("loss");
    }
  };

  return (
    <div className="rps-container">
      <h2>Rock Paper Scissors</h2>
      <div className="rps-choices">
        <div className="rps-choice" onClick={() => handlePlayerChoice("rock")}>
          <span role="img" aria-label="rock">
            ✊
          </span>
        </div>
        <div className="rps-choice" onClick={() => handlePlayerChoice("paper")}>
          <span role="img" aria-label="paper">
            ✋
          </span>
        </div>
        <div
          className="rps-choice"
          onClick={() => handlePlayerChoice("scissors")}
        >
          <span role="img" aria-label="scissors">
            ✌️
          </span>
        </div>
      </div>
      {result && (
        <div className={`rps-result ${result}`}>
          <span>{result}</span>
          {result === "win" && <span>🎉</span>}
          {result === "loss" && <span>😢</span>}
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
