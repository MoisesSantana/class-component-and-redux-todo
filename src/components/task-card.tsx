import React from 'react';
import { Divider, IconButton, ListItem, ListItemText, Tooltip, Typography, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import HandleTaskModal from './handle-task-modal';
import { Dispatch, GlobalStateType, Status, Task, HandleTaskType } from '../types';
import { connect } from 'react-redux';
import { handleTask } from '../redux/tasks.actions';
import { format, formatDistanceToNow } from 'date-fns';


const CustomListItem = styled(ListItem)`
  align-items: flex-start;
  position: relative;

  &:hover {
    transform: scale(1.015);
  }

  .btns-control {
    display: flex;
    gap: 8px;
  }
`;

interface TaskCardProps {
  task: Task;
  tasks: Task[];
  dispatch: Dispatch;
}

class TaskCard extends React.Component<TaskCardProps> {
  createdDateFormatted = () => {
    const { task } = this.props;
    console.log(task.createdAt, typeof task.createdAt);
    return format(
      task.createdAt,
      'LLLL d \'in\' HH:mm\'h\'',
    );
  };

  createdDateRelativeToNow = () => {
    const { task } = this.props;
    return formatDistanceToNow(task.createdAt);
  };

  handleCompleteTask = () => {
    const { task, tasks, dispatch } = this.props;
    const taskToEdit = tasks.find((taskItem: Task) => taskItem.id === task.id);

    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, status: Status.Completed };
      dispatch(handleTask(updatedTask, HandleTaskType.Update));
    }

    this.setState({ showBtn: false });
  };

  handleDeleteTask = () => {
    const { task, tasks, dispatch } = this.props;
    const taskToRemove = tasks.find((taskItem: Task) => taskItem.id === task.id);
    
    if (taskToRemove)
      dispatch(handleTask(taskToRemove, HandleTaskType.Delete));
    
    this.setState({ showBtn: false });
  };

  render() {
    const { task } = this.props;
    const statusTextColor = task.status === 'completed' ? 'green' : 'red';

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
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <time title={ this.createdDateFormatted() } dateTime={ task.createdAt.toLocaleString() }>
              <Typography color="GrayText" variant='caption'>{ this.createdDateRelativeToNow() }</Typography>
            </time>
            <span style={{ color: statusTextColor }}>Status: { task.status }</span>
            <div className="btns-control">
              <IconButton color="success" onClick={this.handleCompleteTask}>
                <Tooltip title="Conclude Task">
                  <CheckIcon />
                </Tooltip>
              </IconButton>
              <HandleTaskModal taskId={ task.id } />
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

const mapStateToProps = ({ tasks }: GlobalStateType) => ({
  tasks,
});

export default connect(mapStateToProps)(TaskCard);