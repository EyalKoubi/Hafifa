import "../../CSS/GamesProps/Popup.css";

interface PopupProps {
  message: string;
}

export default function Popup({ message }: PopupProps) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{message}</h2>
      </div>
    </div>
  );
}
