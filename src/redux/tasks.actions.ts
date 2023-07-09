import { ActionTypes, Dispatch, FilterBy, OrderBy, Task, HandleTaskType } from '../types';
import { promiseCreatedNewTask, promiseDeletedTask, promiseGetAllTasks, promiseUpdatedTask } from '../utils/fakeApi';

const updateTask = (tasks: Task[]) => ({
  type: ActionTypes.UPDATE_TASK,
  payload: tasks,
});

export const orderBy = (orderBy: OrderBy) => ({
  type: ActionTypes.ORDER_BY,
  payload: orderBy,
});

export const filterBy = (filterBy: FilterBy) => ({
  type: ActionTypes.FILTER_BY,
  payload: filterBy,
});

export const searchTask = (searchTerm: string) => ({
  type: ActionTypes.SEARCH_TASK,
  payload: searchTerm,
});

const handleFetch = (payload: boolean) => ({
  type: ActionTypes.HANDLE_FETCH,
  payload,
});

export const handleTask = (task: Task, handleTaskType: HandleTaskType) => (
  async (dispatch: Dispatch) => {
    dispatch(handleFetch(true));
    let data: Task[] = [];

    switch (handleTaskType) {
    case HandleTaskType.Create:
      data = await promiseCreatedNewTask(task);
      break;
    case HandleTaskType.Delete:
      data = await promiseDeletedTask(task.id);
      break;
    case HandleTaskType.GetAll:
      data = await promiseGetAllTasks();
      break;
    default:
      data = await promiseUpdatedTask(task);
    }

    dispatch(updateTask(data));
    dispatch(handleFetch(false));
  }
);
