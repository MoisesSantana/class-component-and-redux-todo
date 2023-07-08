import { ActionTypes, FilterBy, OrderBy, Task } from "../types";

export const updateTask = (tasks: Task[]) => ({
  type: ActionTypes.UPDATE_TASK,
  payload: tasks,
});

export const orderBy = (orderBy: OrderBy) => ({
  type: ActionTypes.ORDER_BY,
  payload: orderBy,
});

export const filterBy = (filterBy: FilterBy) => ({
  type: ActionTypes.FILTER_BY,
  payload: filterBy,
});

export const searchTask = (searchTerm: string) => ({
  type: ActionTypes.SEARCH_TASK,
  payload: searchTerm,
});