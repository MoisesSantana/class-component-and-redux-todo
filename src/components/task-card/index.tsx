import React from 'react';
import { Divider, IconButton, ListItemText, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import HandleTaskModal from '../handle-task-modal';
import { Dispatch, GlobalStateType, Status, Task, HandleTaskType } from '../../types';
import { connect } from 'react-redux';
import { handleTask } from '../../redux/tasks.actions';
import { format, formatDistanceToNow } from 'date-fns';
import { CustomListItem } from './styles';

interface TaskCardProps {
  task: Task;
  tasks: Task[];
  dispatch: Dispatch;
}

class TaskCard extends React.Component<TaskCardProps> {
  createdDateFormatted = () => {
    const { task } = this.props;
    return format(
      task.createdAt,
      'LLLL d \'in\' HH:mm\'h\'',
    );
  };

  createdDateRelativeToNow = () => {
    const { task } = this.props;
    return formatDistanceToNow(task.createdAt);
  };

  foundTaskById = () => {
    const { task, tasks } = this.props;
    return tasks.find(({ id }: Task) => id === task.id);
  };

  handleCompleteTask = () => {
    const { dispatch } = this.props;
    const taskToEdit = this.foundTaskById();

    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, status: Status.Completed };
      dispatch(handleTask(updatedTask, HandleTaskType.Update));
    }

    this.setState({ showBtn: false });
  };

  handleDeleteTask = () => {
    const { dispatch } = this.props;
    const taskToRemove = this.foundTaskById();
    
    if (taskToRemove)
      dispatch(handleTask(taskToRemove, HandleTaskType.Delete));
    
    this.setState({ showBtn: false });
  };

  render() {
    const { task } = this.props;
    const statusTextColor = task.status === Status.Completed ? '#2e7d32' : '#d32f2f';

    return (
      <>
        <CustomListItem>
          <ListItemText
            sx={{ width: '60%' }}
            primary={ task.taskName }
            secondary={
              <Typography color="GrayText" variant="caption" sx={{ display: 'inline-block' }}>
                { task.taskDescription }
              </Typography>
            }
          />
          <aside>
            <time title={ this.createdDateFormatted() } dateTime={ task.createdAt.toLocaleString() }>
              <Typography color="GrayText" variant='caption'>{ this.createdDateRelativeToNow() }</Typography>
            </time>
            <Typography variant='caption' fontWeight={900} color={ statusTextColor }>Status: { task.status }</Typography>
            <div className="btns-control">
              <IconButton color="success" onClick={this.handleCompleteTask}>
                <Tooltip title="Conclude Task">
                  <CheckIcon />
                </Tooltip>
              </IconButton>
              <HandleTaskModal task={ task }  />
              <IconButton color="error" onClick={this.handleDeleteTask}>
                <Tooltip title="Remove Task">
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </div>
          </aside>
        </CustomListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({ tasks });

export default connect(mapStateToProps)(TaskCard);
