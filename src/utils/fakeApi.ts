import { Task } from '../types';

export async function promiseCreatedNewTask(taskList: Task[], newTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const auxTaskList = [...taskList, newTask];
    const updatedTaskList = auxTaskList.map((task, index) => ({ ...task, id: index }));
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 3000);
  });
}

export async function promiseDeletedTask(taskList: Task[], taskId: number): Promise<Task[]> {
  return new Promise((resolve) => {
    const auxTaskList = taskList.filter((task) => task.id !== taskId);
    const updatedTaskList = auxTaskList.map((task, index) => ({ ...task, id: index }));
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 3000);
  });
}

export async function promiseUpdatedTask(taskList: Task[], updatedTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 3000);
  });
}