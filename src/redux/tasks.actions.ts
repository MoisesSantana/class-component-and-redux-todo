import { Task } from "../types";

export const SAVE_TASK = 'SAVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const saveTask = (tasks: Task[]) => ({
  type: SAVE_TASK,
  payload: tasks,
});

export const deleteTask = (tasks: Task[]) => ({
  type: DELETE_TASK,
  payload: tasks,
});

export const updateTask = (tasks: Task[]) => ({
  type: UPDATE_TASK,
  payload: tasks,
});