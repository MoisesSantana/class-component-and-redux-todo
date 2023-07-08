import { Task } from '../types';

export function getStorage(key: string): Task[] {
  const taskList = JSON.parse(localStorage.getItem(key) || JSON.stringify([]));
  return taskList.map((task: Task) => ({ ...task, createdAt: new Date(task.createdAt) }));
}

export function setStorage(key: string, value: Task[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}