import { AnyAction } from 'redux';
import { ActionTypes, GlobalStateType, OrderBy } from '../types';

const INITIAL_STATE = {
  tasks: [],
  orderBy: OrderBy.Current,
};

const tasksReducer = (
  state: GlobalStateType = INITIAL_STATE, action: AnyAction,
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case ActionTypes.ORDER_BY:
    default:
      return state;
  }
};

export default tasksReducer;