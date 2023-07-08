import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux';
import { Dispatch, GlobalStateType, Status, Task, HandleTaskType } from '../types';
import { formatsDate } from '../helper/formatsDate';
import { handleTask } from '../redux/tasks.actions';

interface HandleTaskModalProps {
  isNewTask?: boolean;
  tasks: Task[];
  dispatch: Dispatch;
  taskId?: number;
  handleShowBtnsControl?: () => void;
}

const INITIAL_STATE = {
  open: false,
  taskName: '',
  taskDescription: '',
};

class HandleTaskModal extends React.Component<HandleTaskModalProps> {
  state = INITIAL_STATE;

  handleModal = () => {
    this.setState((prevState: { open: boolean }) => ({ open: !prevState.open }));
  };

  handleSaveTask = () => {
    const { dispatch } = this.props;
    const { taskName, taskDescription } = this.state;

    const newTask = {
      taskName,
      taskDescription,
      status: Status.Unfinished,
      createdAt: formatsDate(new Date()),
      id: 0,
    };

    dispatch(handleTask(newTask, HandleTaskType.Create));

    this.setState(INITIAL_STATE);
  };

  handleEditTask = () => {
    const { tasks, dispatch, taskId, handleShowBtnsControl } = this.props;
    const { taskName, taskDescription } = this.state;

    const taskToEdit = tasks.find((task: Task) => task.id === taskId);
    
    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, taskName, taskDescription };
      dispatch(handleTask(updatedTask, HandleTaskType.Update));
    }
    
    if (handleShowBtnsControl) handleShowBtnsControl();
    
    this.setState(INITIAL_STATE);
  };

  handleChangeInput = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    const { open, taskName, taskDescription } = this.state;
    const { isNewTask = false } = this.props;
    return (
      <div>
        {
          isNewTask ? (
            <Fab variant="extended" color="primary" aria-label="add" onClick={this.handleModal}>
              <AddIcon sx={{ mr: 1 }} />
                New Todo
            </Fab>
          ) : (
            <Fab color="warning" aria-label="edit" onClick={this.handleModal}>
              <EditIcon />
            </Fab>
          )
        }
        
        <Dialog open={open} onClose={this.handleModal}>
          <DialogTitle>{ isNewTask ? 'Define your task' : 'Edit your task' }</DialogTitle>
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
            <Button onClick={isNewTask ? this.handleSaveTask : this.handleEditTask}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({
  tasks,
});

export default connect(mapStateToProps)(HandleTaskModal);
