import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../CSS/GamesProps/QuizGame.css";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

const QuizGame: React.FC = () => {
  const [quizList, setQuizList] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [queLen, setQueLen] = useState(-1);

  useEffect(() => {
    axios
      .get("http://localhost:8000/quizs/getQuestions")
      .then((response) => {
        setQuizList(response.data);
        setQueLen(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching quiz questions:", error);
      });
  }, []);

  const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizList[currentQuestionIndex];
    console.log("selected option: " + selectedOption);
    console.log(
      "currentQuestion.options[currentQuestion.correct]: " +
        currentQuestion.options[currentQuestion.correct - 1]
    );
    const isCorrect =
      currentQuestion.options[currentQuestion.correct - 1] === selectedOption;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex === quizList.length - 1) {
      setShowResult(true);
    } else {
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
  };

  if (showResult) {
    return (
      <div className="quiz-game-container">
        <h1 className="quiz-game-title">Quiz Result</h1>
        <p className="quiz-game-result">Your score: {score}</p>
        <p className="quiz-game-result">
          Success: {Math.floor((score / queLen) * 100)}%
        </p>
        <button
          className="quiz-game-restart-button"
          onClick={handleRestartQuiz}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  if (quizList.length === 0) {
    return (
      <p className="quiz-game-loading-message">Loading quiz questions...</p>
    );
  }

  const currentQuestion = quizList[currentQuestionIndex];

  return (
    <div className="quiz-game-container">
      <h1 className="quiz-game-title">Quiz Game</h1>
      <h2 className="quiz-game-question">
        Question {currentQuestionIndex + 1}
      </h2>
      <p>{currentQuestion.question}</p>
      <ul className="quiz-game-options">
        {currentQuestion.options.map((option: string, index: number) => (
          <li className="quiz-game-option" key={index}>
            <label>
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOptionSelect(event)
                }
              />

              {option}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="quiz-game-next-button"
        onClick={handleNextQuestion}
        disabled={!selectedOption}
      >
        Next
      </button>
    </div>
  );
};

export default QuizGame;
