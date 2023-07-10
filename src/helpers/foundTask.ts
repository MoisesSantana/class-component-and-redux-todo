import { Task } from '../types';

export function foundTaskById (task: Task, tasks: Task[]) {
  return tasks.find(({ id }: Task) => id === task.id);
}