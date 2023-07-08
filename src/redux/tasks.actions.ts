import { Task } from "../types";

export const UPDATE_TASK = 'UPDATE_TASK';

export const updateTask = (tasks: Task[]) => ({
  type: UPDATE_TASK,
  payload: tasks,
});