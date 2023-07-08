import React from 'react';
import { Divider, Fab, ListItem, ListItemText, Typography, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import HandleTaskModal from './handle-task-modal';
import { Task } from '../types';
import { Dispatch } from 'redux';
import { DELETE_TASK, UPDATE_TASK } from '../redux/tasks.actions';
import { connect } from 'react-redux';


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
  tasks: Task[];
  dispatch: Dispatch;
};

class TaskCard extends React.Component<TaskCardProps> {
  state = {
    showBtn: false,
  }

  handleShowBtn = () => {
    this.setState((prevState: { showBtn: boolean }) => ({ showBtn: !prevState.showBtn }))
  }

  handleCompleteTask = () => {
    const { task, tasks, dispatch } = this.props;
    const updatedTasks = tasks.map((taskItem: Task) => taskItem.id === task.id ? { ...taskItem, status: 'completed' } : taskItem);
    dispatch({ type: UPDATE_TASK, payload: updatedTasks });
    this.setState({ showBtn: false });
  }

  handleDeleteTask = () => {
    const { task, tasks, dispatch } = this.props;
    const updatedTasks = tasks.filter((taskItem: Task) => taskItem.id !== task.id);
    dispatch({ type: DELETE_TASK, payload: updatedTasks });
    this.setState({ showBtn: false });
  }

  render() {
    const { showBtn } = this.state;
    const { task } = this.props;
    const listContentBlur = showBtn ? 'blur(3px)' : 'blur(0px)';
    const statusTextColor = task.status === 'completed' ? 'green' : 'red';

    return (
      <>
        <CustomListItem>
          {
            showBtn && (
              <div className="btns-control">
                <Fab color="success" aria-label="conclude" onClick={this.handleCompleteTask}>
                  <CheckIcon />
                </Fab>
                <HandleTaskModal handleShowBtnsControl={this.handleShowBtn} taskId={ task.id } />
                <Fab color="error" aria-label="remove" onClick={this.handleDeleteTask}>
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

const mapStateToProps = ({ tasks }: { tasks: Task[] }) => ({
  tasks,
});

export default connect(mapStateToProps)(TaskCard);