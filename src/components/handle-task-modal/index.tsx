import React, { FormEvent } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux';
import { Dispatch, GlobalStateType, Status, Task, HandleTaskType } from '../../types';
import { handleTask } from '../../redux/tasks.actions';
import { AddTaskBtn } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import {foundTaskById} from '../../helpers/foundTask';


interface HandleTaskModalProps {
  isNewTask?: boolean;
  isDeleteTask?: boolean;
  tasks: Task[];
  dispatch: Dispatch;
  task?: Task;
}

const INITIAL_STATE = {
  open: false,
  taskName: '',
  taskDescription: '',
  isDisabledBtn: true,
};

class HandleTaskModal extends React.Component<HandleTaskModalProps> {
  state = INITIAL_STATE;

  handleModal = () => {
    const { task } = this.props;

    if (!task) {
      return this.setState((prevState: typeof INITIAL_STATE) => ({
        ...prevState,
        open: !prevState.open,
      }));
    }

    this.setState((prevState: typeof INITIAL_STATE) => ({
      ...prevState,
      open: !prevState.open,
      taskName: task.taskName,
      taskDescription: task.taskDescription,
    }), this.validateInputs);
  };

  handleSaveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { taskName, taskDescription } = this.state;

    const newTask = {
      taskName,
      taskDescription,
      status: Status.Unfinished,
      createdAt: new Date(),
      id: 0,
    };

    dispatch(handleTask(newTask, HandleTaskType.Create));

    this.setState(INITIAL_STATE);
  };

  handleEditTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { tasks, dispatch, task } = this.props;
    const { taskName, taskDescription } = this.state;
    if (!task) return;

    const taskToEdit = tasks.find(({ id }: Task) => id === task.id);
    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, taskName, taskDescription };
      dispatch(handleTask(updatedTask, HandleTaskType.Update));
    }
    
    this.setState(INITIAL_STATE);
  };

  validateInputs = () => {
    const { taskName, taskDescription } = this.state;
    const isDisabledBtn = !taskName || !taskDescription;
    this.setState({ isDisabledBtn });
  };

  handleChangeInput = ({ target }) => {
    const { id, value } = target;
    this.setState(() => ({ [id]: value }), this.validateInputs);
  };

  handleDeleteTask = () => {
    const { dispatch, task, tasks } = this.props;
    if (!task) return;
    
    const taskToRemove = foundTaskById(task, tasks);
    if (taskToRemove)
      dispatch(handleTask(taskToRemove, HandleTaskType.Delete));
  };

  render() {
    const { open, taskName, taskDescription, isDisabledBtn } = this.state;
    const { isNewTask = false, isDeleteTask = false } = this.props;
    const isEditTask = !isNewTask && !isDeleteTask;
    return (
      <Box>
        { isNewTask && (
          <AddTaskBtn variant="extended" color="primary" aria-label="add" onClick={this.handleModal}>
            <AddIcon sx={{ mr: 1 }} />
                New Todo
          </AddTaskBtn>
        )}
        { isEditTask && (
          <IconButton color="warning" onClick={this.handleModal}>
            <Tooltip title="Edit Task">
              <EditIcon />
            </Tooltip>
          </IconButton>
        )}
        { isDeleteTask && (
          <IconButton color="error" onClick={this.handleModal}>
            <Tooltip title="Remove Task">
              <DeleteIcon />
            </Tooltip>
          </IconButton>
        )}
        <Dialog open={open} onClose={this.handleModal}>
          <DialogTitle>
            { isNewTask && 'Define your task' }
            { isEditTask && 'Edit your task' }
            { isDeleteTask && 'Are you sure you want to remove this task?' }
          </DialogTitle>
          { isDeleteTask || (
            <form onSubmit={isNewTask ? this.handleSaveTask : this.handleEditTask}>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="taskName"
                  label="Task"
                  fullWidth
                  variant="outlined"
                  value={taskName}
                  onChange={this.handleChangeInput}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="taskDescription"
                  label="Description"
                  fullWidth
                  variant="outlined"
                  value={taskDescription}
                  onChange={this.handleChangeInput}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleModal}>Cancel</Button>
                <Button disabled={ isDisabledBtn } type='submit'>Save</Button>
              </DialogActions>
            </form>
          )}
          { isDeleteTask && (
            <DialogActions>
              <Button color='primary' onClick={this.handleModal}>
                cancel
              </Button>
              <Button color='error' disabled={ isDisabledBtn } onClick={this.handleDeleteTask}>
                confirm
              </Button>
            </DialogActions>
          )}
        </Dialog>
      </Box>
    );
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({ tasks });

export default connect(mapStateToProps)(HandleTaskModal);
