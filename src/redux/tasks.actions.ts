import { ActionTypes, Task } from "../types";

export const updateTask = (tasks: Task[]) => ({
  type: ActionTypes.UPDATE_TASK,
  payload: tasks,
});

export const orderBy = (orderBy: string) => ({
  type: ActionTypes.ORDER_BY,
  payload: orderBy,
});