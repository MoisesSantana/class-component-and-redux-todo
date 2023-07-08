import { Task } from '../types';
import { getStorage, setStorage } from './storage';

export async function promiseCreatedNewTask(newTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage('taskList');
    const auxTaskList = [...taskListStorage, newTask];
    const updatedTaskList = auxTaskList.map((task, index) => ({ ...task, id: index }));
    setStorage('taskList', updatedTaskList);
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 1000);
  });
}

export async function promiseDeletedTask(taskId: number): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage('taskList');
    const auxTaskList = taskListStorage.filter((task) => task.id !== taskId);
    const updatedTaskList = auxTaskList.map((task, index) => ({ ...task, id: index }));
    setStorage('taskList', updatedTaskList);
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 1000);
  });
}

export async function promiseUpdatedTask(updatedTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage('taskList');
    const updatedTaskList = taskListStorage.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setStorage('taskList', updatedTaskList);
    setTimeout(() => {
      resolve(updatedTaskList);
    }, 1000);
  });
}

export async function promiseGetAllTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage('taskList');
    setTimeout(() => {
      resolve(taskListStorage);
    }, 1000);
  });
}