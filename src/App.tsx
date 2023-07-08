import React from 'react';
import { Box, List, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Header } from './components/header';
import TaskCard from './components/task-card';
import { GlobalStateType, Task } from './types';
import { connect } from 'react-redux';

const RootContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  width: 100%;
  height: 100vh;
  align-items: center;
`

interface AppProps {
  tasks: Task[];
};

class App extends React.Component<AppProps> {
  render() {
    const { tasks } = this.props;
    return (
      <RootContainer>
        <Header />
        <Paper  sx={{ width: '80%', mt: 12, overflowY: 'auto', overflowX: 'hidden', height: 'calc(100vh - 200px)' }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
              tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
            }
          </List>
        </Paper>
      </RootContainer>
    )
  }
}

const mapStateToProps = ({ tasks }: GlobalStateType) => ({
  tasks,
});

export default connect(mapStateToProps)(App);
