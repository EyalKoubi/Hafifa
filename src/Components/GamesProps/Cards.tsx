import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import Popup from "./Popup";
import "../../CSS/GamesProps/Cards.css";

interface CardData {
  id: number;
  name: string;
  status: string;
  img: string;
}

export default function Cards() {
  const [cards, setCards] = useState<CardData[]>(
    [
      { id: 0, name: "flamingo", status: "", img: "/images/01.jpg" },
      { id: 0, name: "flamingo", status: "", img: "/images/01.jpg" },
      { id: 1, name: "Bear", status: "", img: "/images/02.jpg" },
      { id: 1, name: "bear", status: "", img: "/images/02.jpg" },
      { id: 2, name: "lion", status: "", img: "/images/03.jpg" },
      { id: 2, name: "lion", status: "", img: "/images/03.jpg" },
      { id: 3, name: "fox", status: "", img: "/images/04.jpg" },
      { id: 3, name: "fox", status: "", img: "/images/04.jpg" },
      { id: 4, name: "dog", status: "", img: "/images/05.jpg" },
      { id: 4, name: "dog", status: "", img: "/images/05.jpg" },
      { id: 5, name: "panda", status: "", img: "/images/06.jpg" },
      { id: 5, name: "panda", status: "", img: "/images/06.jpg" },
      { id: 6, name: "deer", status: "", img: "/images/07.jpg" },
      { id: 6, name: "deer", status: "", img: "/images/07.jpg" },
      { id: 7, name: "tiger", status: "", img: "/images/08.jpg" },
      { id: 7, name: "tiger", status: "", img: "/images/08.jpg" },
      { id: 8, name: "parrot", status: "", img: "/images/09.jpg" },
      { id: 8, name: "parrot", status: "", img: "/images/09.jpg" },
      { id: 9, name: "turtle", status: "", img: "/images/010.jpg" },
      { id: 9, name: "turtle", status: "", img: "/images/010.jpg" },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState<number>(-1);
  const previousIndex = useRef<number>(-1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (showPopup) {
      setGameOver(true);
    }
  }, [showPopup]);

  const resetGame = () => {
    setCards(
      cards
        .map((card) => ({ ...card, status: "" }))
        .sort(() => Math.random() - 0.5)
    );
    setPreviousCardState(-1);
    previousIndex.current = -1;
    setShowPopup(false);
    setGameOver(false);
  };

  const matchCheck = (currentCard: number) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      const activeMatches = cards.filter(
        (card) => card.status === "active matched"
      ).length;
      if (activeMatches === 20) {
        setShowPopup(true);
      } else {
        setPreviousCardState(-1);
      }
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index: number) => {
    if (gameOver) {
      alert("Please click on Start Over to play again.");
    } else {
      if (index !== previousIndex.current) {
        if (cards[index].status === "active matched") {
          alert("already matched");
        } else {
          if (previousCardState === -1) {
            previousIndex.current = index;
            cards[index].status = "active";
            setCards([...cards]);
            setPreviousCardState(index);
          } else {
            matchCheck(index);
            previousIndex.current = -1;
          }
        }
      } else {
        alert("card currently selected");
      }
    }
  };

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card
          card={card}
          key={index}
          index={index}
          clickhandler={clickhandler}
        />
      ))}

      {showPopup && (
        <Popup message="Congratulations, you have matched all cards!" />
      )}
      {gameOver && <button onClick={resetGame}>Start Over</button>}
    </div>
  );
}
