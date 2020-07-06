// First we import react.
import React from "react";
import ReactDOM from "react-dom";

// We also need to import our css file from this directory.
import "./index.css";

//==============================================

// This is a react class (square).
class Square extends React.Component {
  // Square no longer has a constructor because it is no longer storing the game's state.

  // This is the render function for the square component. It determines what the square component will render to the screen.
  render() {
    return (
      // This says each square consists of a button with the css class "square"...
      <button
        className="square"
        // ...and an onclick function that sets its state to the value "X".
        onClick={() => this.props.onClick()}
      >
        {/* The line below is what makes the square display "X" after being clicked. */}
        {this.props.value}
      </button> // Closing tag for the button
    ); // Closing bracket for the render function's return value
  } // Closing bracket for the Square component's render function
} // Closing bracket for the Square component

//===============================================

// The board is a new component.
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  // This is the board component's render function, where we describe what the board will display to the screen.
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
