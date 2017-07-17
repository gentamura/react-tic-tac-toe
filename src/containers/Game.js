import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {
  addMark,
  jumpTo
} from '../actions';

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getNext() {
    const { xIsNext } = this.props;
    return xIsNext ? 'X' : 'O'
  }

  calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const { dispatch, stepNumber } = this.props;
    const history = this.props.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) return;

    squares[i] = this.getNext();

    dispatch(addMark(history, squares));
  }

  jumpTo(stepNumber) {
    const { dispatch } = this.props;
    dispatch(jumpTo(stepNumber));
  }

  render() {
    const { history, stepNumber } = this.props;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      // eslint-disable-next-line
      return <li key={move}><a href="#" onClick={() => this.jumpTo(move)}>{desc}</a></li>;
    });

    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.getNext()}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Game);
