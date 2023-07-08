import React from 'react';
import { Box, List, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Header } from './components/header';
import { TaskCard } from './components/task-card';

const RootContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  width: 100vw;
  height: 100vh;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <RootContainer>
        <Header />
        <Paper  sx={{ width: '80%', mt: 12, overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </List>
        </Paper>
      </RootContainer>
    )
  }
}

export default App;
