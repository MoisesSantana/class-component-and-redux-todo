import { ActionTypes, Dispatch, FilterBy, GlobalStateType, OrderBy, Task, TaskUpdateType } from "../types";
import { promiseCreatedNewTask, promiseDeletedTask, promiseUpdatedTask } from "../utils/fakeApi";

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

const handleFetch = () => ({
  type: ActionTypes.HANDLE_FETCH,
});

export const handleTask = (task: Task, taskUpdateType: TaskUpdateType) => (
  async (dispatch: Dispatch, getState: () => GlobalStateType) => {
    dispatch(handleFetch());
    const { tasks } = getState();
    let data: Task[] = [];
    switch (taskUpdateType) {
      case TaskUpdateType.Create:
        data = await promiseCreatedNewTask(tasks, task);
        break;
      case TaskUpdateType.Delete:
        data = await promiseDeletedTask(tasks, task.id);
        break;
      default:
        data = await promiseUpdatedTask(tasks, task);
    }
    dispatch(updateTask(data));
    dispatch(handleFetch());
  }
);
