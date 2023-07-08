import React from 'react';
import { Divider, Fab, ListItem, ListItemText, Typography, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import HandleTaskModal from './handle-task-modal';
import { Task } from '../types';


const CustomListItem = styled(ListItem)`
  align-items: flex-start;
  position: relative;

  &:hover {
    transform: scale(1.015);
    cursor: pointer;
  }

  .btns-control {
    display: flex;
    gap: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

interface TaskCardProps {
  task: Task;
};

class TaskCard extends React.Component<TaskCardProps> {
  state = {
    showBtn: false,
  }

  handleShowBtn = () => {
    this.setState((prevState: { showBtn: boolean }) => ({ showBtn: !prevState.showBtn }))
  }

  render() {
    const { showBtn } = this.state;
    const { task } = this.props;
    const listContentBlur = showBtn ? 'blur(3px)' : 'blur(0px)';
    const statusTextColor = task.status === 'completed' ? 'blue' : 'red';

    return (
      <>
        <CustomListItem>
          {
            showBtn && (
              <div className="btns-control">
                <Fab color="success" aria-label="complete">
                  <CheckIcon />
                </Fab>
                <HandleTaskModal />
                <Fab color="error" aria-label="remove">
                  <DeleteIcon />
                </Fab>
              </div>
            )
          }
          <ListItemText
            role="complementary"
            onClick={ this.handleShowBtn }
            sx={{ width: '60%', filter: listContentBlur }}
            primary={ task.taskName }
            secondary={
              <Typography color="GrayText" variant="caption" sx={{ display: 'inline-block' }}>
                { task.taskDescription }
              </Typography>
            }
          />
          <aside role="complementary" onClick={ this.handleShowBtn } style={{ filter: listContentBlur }}>
            <p style={{ color: statusTextColor }}>Status: { task.status }</p>
            <p>Created At: { task.createdAt }</p>
          </aside>
        </CustomListItem>
        <Divider variant="inset" component="li" />  
      </>
    );
  }
}

export default TaskCard;