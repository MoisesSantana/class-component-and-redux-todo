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

interface HandleTaskModalProps {
  isNewTask?: boolean;
}

export class HandleTaskModal extends React.Component<HandleTaskModalProps> {
  state = {
    open: false,
  }

  handleModal = () => {
   this.setState((prevState: { open: boolean }) => ({ open: !prevState.open }));
  };

  handleSaveTask = () => {
    this.handleModal();
  }

  handleEditTask = () => {
    this.handleModal();
  }

  render() {
    const { open } = this.state;
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
              id="task"
              label="Task"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              variant="outlined"
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