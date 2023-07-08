export type Task = {
  id: number;
  taskName: string;
  taskDescription: string;
  status: 'unfinished' | 'completed';
  createdAt: string;
};

export type GlobalStateType = {
  tasks: Task[],
  orderBy: OrderBy,
}

export enum ActionTypes {
  UPDATE_TASK = 'UPDATE_TASK',
  ORDER_BY = 'ORDER_BY',
}

export enum OrderBy {
  Current = 'Current',
  Old = 'Old',
}
