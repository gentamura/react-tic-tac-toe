export const JUMP_TO = 'JUMP_TO';
export const ADD_MARK = 'ADD_MARK';

export const addMark = (history, squares) => {
  return {
    type: ADD_MARK,
    history,
    squares,
  };
};

export const jumpTo = (stepNumber) => {
  return {
    type: JUMP_TO,
    stepNumber,
  };
};
