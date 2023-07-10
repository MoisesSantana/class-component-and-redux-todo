import React, { FormEvent } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
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

interface HandleTaskModalProps {
  isNewTask?: boolean;
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

  render() {
    const { open, taskName, taskDescription, isDisabledBtn } = this.state;
    const { isNewTask = false } = this.props;
    return (
      <Box>
        {
          isNewTask ? (
            <AddTaskBtn variant="extended" color="primary" aria-label="add" onClick={this.handleModal}>
              <AddIcon sx={{ mr: 1 }} />
                New Todo
            </AddTaskBtn>
          ) : (
            <IconButton color="warning" onClick={this.handleModal}>
              <Tooltip title="Edit Task">
                <EditIcon />
              </Tooltip>
            </IconButton>
          )
        }
        <Dialog open={open} onClose={this.handleModal}>
          <DialogTitle>{ isNewTask ? 'Define your task' : 'Edit your task' }</DialogTitle>
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
        </Dialog>
      </Box>
    );
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({ tasks });

export default connect(mapStateToProps)(HandleTaskModal);
