import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const threeMap = (fun) => Array(3).fill(null).map(fun);
  const renderSquare = (i) => <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;
  const renderRow = (i, func) => <div key={i} className="board-row">{func()}</div>;

  let idx = 0;
  const renderRows = () => threeMap(() => renderSquare(idx++));
  const renderCols = () => threeMap((_, i) => renderRow(i, renderRows));

  return <div>{renderCols()}</div>;
};

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Board;
