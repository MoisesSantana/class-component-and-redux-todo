import { AnyAction } from 'redux';
import { UPDATE_TASK } from './tasks.actions';
import { Task } from '../types';

type TasksReducerState = {
  tasks: Task[],
}

const INITIAL_STATE = {
  tasks: [],
};

const tasksReducer = (
  state: TasksReducerState = INITIAL_STATE, action: AnyAction,
) => {
  switch (action.type) {
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