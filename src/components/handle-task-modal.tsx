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
import { SAVE_TASK } from '../redux/tasks.actions';
import { formatsDate } from '../helper/formatsDate';

interface HandleTaskModalProps {
  isNewTask?: boolean;
  tasks: Task[];
  dispatch: Dispatch;
}

class HandleTaskModal extends React.Component<HandleTaskModalProps> {
  state = {
    open: false,
    taskName: '',
    taskDescription: '',
  }

  handleModal = () => {
   this.setState((prevState: { open: boolean }) => ({ open: !prevState.open }));
  };

  handleSaveTask = () => {
    const { tasks, dispatch } = this.props;
    const { taskName, taskDescription } = this.state;
    this.handleModal();
    dispatch({ type: SAVE_TASK, payload: [...tasks, {
      taskName,
      taskDescription,
      status: 'unfinished',
      createdAt: formatsDate(new Date()),
      id: tasks.length + 1,
    }] });
  }

  handleEditTask = () => {
    this.handleModal();
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
