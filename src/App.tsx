import React from 'react';
import { List } from '@mui/material';
import Header from './components/header';
import { Dispatch, FilterBy, GlobalStateType, HandleTaskType, OrderBy, Status, Task } from './types';
import { connect } from 'react-redux';
import Loading from './components/loading';
import { handleTask } from './redux/tasks.actions';
import { MainContainer, RootContainer } from './App.styles';
import TaskCard from './components/task-card';

interface AppProps extends GlobalStateType {
  dispatch: Dispatch;
}

class App extends React.Component<AppProps> {
  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch(handleTask({} as Task, HandleTaskType.GetAll));
  }

  sortByDate = () => {
    const { tasks, orderBy } = this.props;
    if (orderBy === OrderBy.Current) return tasks.sort((current, next) => next.id - current.id);
    return tasks.sort((current, next) => current.id - next.id);
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
    const { isLoading } = this.props;

    return (
      <RootContainer>
        <Header />
        <MainContainer>
          <List sx={{ width: '100%', bgcolor: 'background.paper', position: 'relative' }}>
            {isLoading && <Loading />}
            {
              searchedTasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
            }
          </List>
        </MainContainer>
      </RootContainer>
    );
  }
}

const mapStateToProps = (state: GlobalStateType) => ({ ...state });

export default connect(mapStateToProps)(App);
