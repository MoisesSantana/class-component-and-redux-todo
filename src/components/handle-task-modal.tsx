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
import { Dispatch } from 'redux';
import { GlobalStateType, Status, Task } from '../types';
import { formatsDate } from '../helper/formatsDate';
import { updateTask } from '../redux/tasks.actions';

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
    const { tasks, dispatch } = this.props;
    const { taskName, taskDescription } = this.state;

    const expectedTaskList = [...tasks, {
      taskName,
      taskDescription,
      status: Status.Unfinished,
      createdAt: formatsDate(new Date()),
      id: tasks.length + 1,
    }]

    dispatch(updateTask(expectedTaskList));

    this.setState(INITIAL_STATE);
  }

  handleEditTask = () => {
    const { tasks, dispatch, taskId, handleShowBtnsControl } = this.props;
    const { taskName, taskDescription } = this.state;

    const updatedTasks = tasks.map((task: Task) => task.id === taskId ? { ...task, taskName, taskDescription } : task);
    dispatch(updateTask(updatedTasks));
    
    if (handleShowBtnsControl) handleShowBtnsControl();
    
    this.setState(INITIAL_STATE);
  }

  handleChangeInput = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

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
