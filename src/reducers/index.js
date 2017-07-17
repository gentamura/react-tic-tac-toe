import { JUMP_TO, ADD_MARK } from '../actions';

const reducer = (
  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
  },
  action
) => {
  switch (action.type) {
    case ADD_MARK:
      return {
        history: action.history.concat([{
          squares: action.squares,
        }]),
        stepNumber: action.history.length,
        xIsNext: !state.xIsNext,
      };
    case JUMP_TO:
      return Object.assign({}, state, {
        stepNumber: action.stepNumber,
        xIsNext: (action.stepNumber % 2) === 0,
      });
    default:
      return state;
  }
};

export default reducer;
