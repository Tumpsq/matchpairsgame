import React, { useState } from "react";
import "./App.css";
import { Error, Code, Email, Phone, Save, Grade } from "@material-ui/icons";
import Board from "./components/Board";
import FlipCounter from "./components/FlipCounter";

const data = [
  { id: 0, cardName: 0, flipped: false, pairFound: false, icon: <Error /> },
  { id: 1, cardName: 0, flipped: false, pairFound: false, icon: <Error /> },
  { id: 2, cardName: 1, flipped: false, pairFound: false, icon: <Code /> },
  { id: 3, cardName: 1, flipped: false, pairFound: false, icon: <Code /> },
  { id: 4, cardName: 2, flipped: false, pairFound: false, icon: <Email /> },
  { id: 5, cardName: 2, flipped: false, pairFound: false, icon: <Email /> },
  { id: 6, cardName: 3, flipped: false, pairFound: false, icon: <Phone /> },
  { id: 7, cardName: 3, flipped: false, pairFound: false, icon: <Phone /> },
  { id: 8, cardName: 4, flipped: false, pairFound: false, icon: <Save /> },
  { id: 9, cardName: 4, flipped: false, pairFound: false, icon: <Save /> },
  { id: 10, cardName: 5, flipped: false, pairFound: false, icon: <Grade /> },
  { id: 11, cardName: 5, flipped: false, pairFound: false, icon: <Grade /> },
];

export default function App() {
  const [flipCount, setFlipCount] = useState(0);
  const [isClickDisabled, setIsClickDisabled] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastTurnedCard, setLastTurnedCard] = useState({});

  const shuffle = (arr) => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  const [cards, setCards] = useState(() => {
    return shuffle(data);
  });

  const resetGame = () => {
    for (var i = 0; i < cards.length; i++) {
      setFlipCount(0);
      cards[i].flipped = false;
      cards[i].pairFound = false;
      setCards([...cards]);
    }
  };

  const handleFlipCard = (id) => {
    setFlipCount(flipCount + 1);
    const card = cards.find((card) => card.id === id);
    setLastTurnedCard(card);
    card.flipped = true;
    setCards([...cards]);

    if (lastTurnedCard.hasOwnProperty("cardName")) {
      // NOW WE KNOW THAT THIS IS SECOND CARD WHICH IS TURNED
      setIsClickDisabled(true); // DISABLE CLICK EVENTS FOR BOARD
      if (card.cardName === lastTurnedCard.cardName) {
        console.log("PAIR FOUND");
        setTimeout(() => {
          handleShowMessage("Gz, PAIR FOUND");
          setIsClickDisabled(false); // ENABLE CLICK EVENTS FOR BOARD
        }, 1000);
        // PAIR FOUND -> CHANGE cards pairFound VALUES TO TRUE
        for (var i = 0; i < cards.length; i++) {
          if (cards[i].cardName === card.cardName) {
            cards[i].pairFound = true;
            setCards([...cards]);
          }
        }
        const hasAllFound = (currentCard) => currentCard.pairFound === true;
        if (cards.every(hasAllFound)) {
          // CHECK IF ALL PAIRS HAVE BEEN FOUND
          setTimeout(() => {
            handleShowMessage(`You finished with ${flipCount + 1} flips`);
            setTimeout(() => {
              resetGame();
              setIsClickDisabled(false); // ENABLE CLICK EVENTS FOR BOARD
            }, 4000);
          }, 5000);
        }
        setLastTurnedCard({});
      } else {
        setTimeout(() => {
          setIsClickDisabled(false); // ENABLE CLICK EVENTS FOR BOARD
          setLastTurnedCard({});
          for (var i = 0; i < cards.length; i++) {
            if (!cards[i].pairFound) {
              cards[i].flipped = false;
              setCards([...cards]);
            }
          }
        }, 2000);
      }
    }
  };

  const handleShowMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <div className="App">
      <FlipCounter flipCount={flipCount} />
      <div
        className={`Info-message`}
        style={{
          animationName: `${
            message ? "Show-info-message" : "Hide-info-message"
          }`,
        }}
      >
        {message}
      </div>
      <div
        className={`Board-content ${isClickDisabled && "Disable-click-events"}`}
      >
        <Board cards={cards} handleFlipCard={handleFlipCard} />
      </div>
    </div>
  );
}
