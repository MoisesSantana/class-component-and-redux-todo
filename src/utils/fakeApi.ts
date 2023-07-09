import { Task } from '../types';
import { getStorage, setStorage } from './storage';

const TIME_OUT = 1000;
const PERSIST_KEY = 'taskList';

const sortsTaskIds = (taskList: Task[]): Task[] => (
  taskList.map((task, index) => ({ ...task, id: index }))
);

export async function promiseCreatedNewTask(newTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage(PERSIST_KEY);
    const updatedTaskList = [...taskListStorage, newTask];
    setStorage(PERSIST_KEY, sortsTaskIds(updatedTaskList));

    setTimeout(() => {
      resolve(sortsTaskIds(updatedTaskList));
    }, TIME_OUT);
  });
}

export async function promiseDeletedTask(taskId: number): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage(PERSIST_KEY);
    const updatedTaskList = taskListStorage.filter((task) => task.id !== taskId);
    setStorage(PERSIST_KEY, sortsTaskIds(updatedTaskList));

    setTimeout(() => {
      resolve(sortsTaskIds(updatedTaskList));
    }, TIME_OUT);
  });
}

export async function promiseUpdatedTask(updatedTask: Task): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage(PERSIST_KEY);
    const updatedTaskList = taskListStorage.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setStorage(PERSIST_KEY, updatedTaskList);

    setTimeout(() => {
      resolve(updatedTaskList);
    }, TIME_OUT);
  });
}

export async function promiseGetAllTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    const taskListStorage = getStorage(PERSIST_KEY);

    setTimeout(() => {
      resolve(taskListStorage);
    }, TIME_OUT);
  });
}