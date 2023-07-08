import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Task } from '../types';
import { UPDATE_TASK } from '../redux/tasks.actions';
import { formatsDate } from '../helper/formatsDate';

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

    dispatch({ type: UPDATE_TASK, payload: [...tasks, {
      taskName,
      taskDescription,
      status: 'unfinished',
      createdAt: formatsDate(new Date()),
      id: tasks.length + 1,
    }] });

    this.setState(INITIAL_STATE);
  }

  handleEditTask = () => {
    const { tasks, dispatch, taskId, handleShowBtnsControl } = this.props;
    const { taskName, taskDescription } = this.state;

    const updatedTasks = tasks.map((task: Task) => task.id === taskId ? { ...task, taskName, taskDescription } : task);
    dispatch({ type: UPDATE_TASK, payload: updatedTasks });
    
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

const mapStateToProps = ({ tasks }: { tasks: Task[] }) => ({
  tasks,
});

export default connect(mapStateToProps)(HandleTaskModal);
