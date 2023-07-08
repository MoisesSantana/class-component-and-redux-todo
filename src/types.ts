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
}

export enum Status {
  Unfinished = 'unfinished',
  Completed = 'completed',
}

export enum ActionTypes {
  UPDATE_TASK = 'UPDATE_TASK',
  ORDER_BY = 'ORDER_BY',
}

export enum OrderBy {
  Current = 'Current',
  Old = 'Old',
}
