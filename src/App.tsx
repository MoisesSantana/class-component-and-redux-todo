import React from 'react';
import { Box, List, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Header from './components/header';
import TaskCard from './components/task-card';
import { FilterBy, GlobalStateType, OrderBy, Status, Task } from './types';
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
  orderBy: OrderBy;
  filterBy: FilterBy;
  searchTerm: string;
};

class App extends React.Component<AppProps> {

  sortByDate = () => {
    const { tasks, orderBy } = this.props;
    if (orderBy === OrderBy.Current) return tasks.sort((a, b) => a.id - b.id);
    return tasks.sort((a, b) => b.id - a.id);
  };

  filterByStatus = (sortedTasks: Task[]) => {
    const { filterBy } = this.props;
    if (filterBy === FilterBy.All) return sortedTasks;
    if (filterBy === FilterBy.Completed) return sortedTasks.filter((task) => task.status === Status.Completed);
    return sortedTasks.filter(task => task.status === Status.Unfinished);
  };

  filterByTerm = (filteredTasks: Task[]) => {
    const { searchTerm } = this.props;
    if (!searchTerm) return filteredTasks;
    return filteredTasks.filter((task) => task.taskName.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  render() {
    const sortedTasks = this.sortByDate();
    const filteredTasks = this.filterByStatus(sortedTasks);
    const searchedTasks = this.filterByTerm(filteredTasks);

    return (
      <RootContainer>
        <Header />
        <Paper  sx={{ width: '80%', mt: 12, overflowY: 'auto', overflowX: 'hidden', height: 'calc(100vh - 200px)' }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
              searchedTasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
            }
          </List>
        </Paper>
      </RootContainer>
    )
  }
}

const mapStateToProps = ({ tasks, orderBy, filterBy, searchTerm }: GlobalStateType) => ({
  tasks,
  orderBy,
  filterBy,
  searchTerm,
});

export default connect(mapStateToProps)(App);
