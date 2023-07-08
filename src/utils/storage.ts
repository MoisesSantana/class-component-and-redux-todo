import { Task } from "../types";

export function getStorage(key: string): Task[] {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify([]));
}

export function setStorage(key: string, value: Task[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}