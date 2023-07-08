export const SAVE_TASK = 'SAVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const saveTask = (tasks) => ({
  type: SAVE_TASK,
  payload: tasks,
});

export const deleteTask = (tasks) => ({
  type: DELETE_TASK,
  payload: tasks,
});

export const updateTask = (tasks) => ({
  type: UPDATE_TASK,
  payload: tasks,
});