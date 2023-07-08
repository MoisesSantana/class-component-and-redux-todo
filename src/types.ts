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
}

export enum Status {
  Unfinished = 'unfinished',
  Completed = 'completed',
}

export enum ActionTypes {
  UPDATE_TASK = 'UPDATE_TASK',
  ORDER_BY = 'ORDER_BY',
  FILTER_BY = 'FILTER_BY',
  SEARCH_TASK = 'SEARCH_TASK',
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
