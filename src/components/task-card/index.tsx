import React from 'react';
import { Box, Divider, IconButton, ListItemText, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HandleTaskModal from '../handle-task-modal';
import { Dispatch, GlobalStateType, Status, Task, HandleTaskType } from '../../types';
import { connect } from 'react-redux';
import { handleTask } from '../../redux/tasks.actions';
import { format, formatDistanceToNow } from 'date-fns';
import { CustomListItem } from './styles';
import { foundTaskById } from '../../helpers/foundTask';

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

  handleCompleteTask = () => {
    const { dispatch, task, tasks } = this.props;
    if (!task) return;
    
    const taskToEdit = foundTaskById(task, tasks);
    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, status: Status.Completed };
      dispatch(handleTask(updatedTask, HandleTaskType.Update));
    }
  };

  render() {
    const { task } = this.props;
    const isCompletedTask = task.status === Status.Completed;

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
            <Typography variant='caption' fontWeight={900} color={ isCompletedTask ? 'success.main' : 'error' }>Status: { task.status }</Typography>
            <Box className="btns-control">
              <IconButton color="success" onClick={this.handleCompleteTask}>
                <Tooltip title="Conclude Task">
                  <CheckIcon />
                </Tooltip>
              </IconButton>
              <HandleTaskModal task={ task }  />
              <HandleTaskModal task={ task } isDeleteTask  />
            </Box>
          </aside>
        </CustomListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({ tasks });

export default connect(mapStateToProps)(TaskCard);
