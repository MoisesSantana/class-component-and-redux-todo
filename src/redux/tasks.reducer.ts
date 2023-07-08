import { AnyAction } from 'redux';
import { SAVE_TASK } from './tasks.actions';
import { DELETE_TASK } from './tasks.actions';
import { UPDATE_TASK } from './tasks.actions';

type TasksReducerState = {
  tasks: string[],
}

const INITIAL_STATE = {
  tasks: [],
};

const tasksReducer = (
  state: TasksReducerState = INITIAL_STATE, action: AnyAction,
) => {
  switch (action.type) {
    case SAVE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;