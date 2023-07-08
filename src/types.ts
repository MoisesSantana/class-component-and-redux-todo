export type Task = {
  id: number;
  taskName: string;
  taskDescription: string;
  status: 'unfinished' | 'completed';
  createdAt: string;
};
