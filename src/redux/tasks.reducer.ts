import { AnyAction } from 'redux';
import { ActionTypes, FilterBy, GlobalStateType, OrderBy } from '../types';

const INITIAL_STATE = {
  tasks: [],
  orderBy: OrderBy.Current,
  filterBy: FilterBy.All,
  searchTerm: '',
  isLoading: false,
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
      return {
        ...state,
        orderBy: action.payload,
      };
    case ActionTypes.FILTER_BY:
      return {
        ...state,
        filterBy: action.payload,
      }
    case ActionTypes.SEARCH_TASK:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ActionTypes.HANDLE_FETCH:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    default:
      return state;
  }
};

export default tasksReducer;