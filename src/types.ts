import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type Task = {
  id: number;
  taskName: string;
  taskDescription: string;
  status: Status;
  createdAt: string;
};

export type GlobalStateType = {
  tasks: Task[],
  orderBy: OrderBy,
  filterBy: FilterBy,
  searchTerm: string,
  isLoading: boolean,
}

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;

export enum Status {
  Unfinished = 'unfinished',
  Completed = 'completed',
}

export enum ActionTypes {
  UPDATE_TASK = 'UPDATE_TASK',
  ORDER_BY = 'ORDER_BY',
  FILTER_BY = 'FILTER_BY',
  SEARCH_TASK = 'SEARCH_TASK',
  HANDLE_FETCH = 'HANDLE_FETCH',
}

export enum OrderBy {
  Current = 'Current',
  Old = 'Old',
}

export enum FilterBy {
  All = 'All',
  Unfinished = 'Unfinished',
  Completed = 'Completed',
}

export enum TaskUpdateType {
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete',
}
