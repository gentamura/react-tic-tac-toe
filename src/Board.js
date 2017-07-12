import React, { Component } from 'react';
import Square from './components/Square';

class Board extends Component {
  threeMap(fun) {
    return Array(3).fill(null).map(fun);
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoardRow(i, func) {
    return <div key={i} className="board-row">{func()}</div>;
  }

  render() {
    let idx = 0;
    const renderRows = () => this.threeMap(() => this.renderSquare(idx++));
    const renderCols = () => this.threeMap((_, i) => this.renderBoardRow(i, renderRows));
    return <div>{renderCols()}</div>;
  }
}

export default Board;
