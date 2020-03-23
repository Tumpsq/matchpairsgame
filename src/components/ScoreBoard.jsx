import React, { useState } from "react";

const Scoreboard = ({
  showScoreboard,
  setShowscoreboard,
  setNewScore,
  highScores,
  flipCount,
  handleSaveNewScore,
  newScore,
  resetGame
}) => {
  const [playerName, setPlayerName] = useState("");
  return (
    <div
      className="Scoreboard"
      style={{
        animationName: `${showScoreboard ? "showScoreboard" : "hideScoreboard"}`
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button className="Button" onClick={() => setShowscoreboard(false)}>
          CLOSE
        </button>
        <button
          className="Button"
          onClick={() => {
            setShowscoreboard(false);
            resetGame();
          }}
        >
          START OVER
        </button>
      </div>

      <div>SCORES</div>
      <div className="Scores">
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            {highScores.map((scoreItem, index) => {
              const score = scoreItem.data();
              return (
                <tr key={scoreItem.id}>
                  <td>{index}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {newScore && (
          <div className="Save-new-score-container">
            <h1>SAVE SCORE</h1>
            <form
              onSubmit={event => {
                event.preventDefault();
                setPlayerName("");
                handleSaveNewScore(playerName, flipCount);
                setNewScore(null);
              }}
            >
              <input
                type="text"
                value={playerName}
                onChange={event => setPlayerName(event.target.value)}
              />
              <button className="Button" type="submit">
                SAVE SCORE
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scoreboard;
