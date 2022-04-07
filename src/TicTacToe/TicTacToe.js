import { within } from "@testing-library/react";
import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCels] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return setWinner(squares[a]);
      }
    }
    return null;
  };

  const handleCLick = (num) => {
    let squares = [...cells];

    if (cells[num] != "") {
      alert("Alredy clicked");
    }

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    checkForWinner(squares);
    setCels(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCels(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleCLick(num)}>{cells[num]}</td>;
  };
  return (
    <div className="container">
      <div className="player">
        <p>Turn: {turn}</p>
      </div>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <div className="textForWinner">
          <p>{winner} is winner</p>

          <button onClick={handleRestart} className="ui primary basic button">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
