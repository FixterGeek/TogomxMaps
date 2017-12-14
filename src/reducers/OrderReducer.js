import {
    ORDER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_FETCH_SUCCESS:
      console.log(action);
      return action.orders;
    default:
      return state
  }
}
