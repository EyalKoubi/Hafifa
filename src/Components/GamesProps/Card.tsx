import React from "react";
import "../../CSS/GamesProps/Card.css";

interface CardProps {
  card: {
    id: number;
    name: string;
    status: string;
    img: string;
  };
  index: number;
  clickhandler: (index: number) => void;
}

export default function Card({ card, index, clickhandler }: CardProps) {
  return (
    <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
      <img src={card.img} alt={card.name} />
    </div>
  );
}
