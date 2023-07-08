import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import HandleTaskModal from './handle-task-modal';
import { connect } from 'react-redux';
import { FilterBy, GlobalStateType, OrderBy } from '../types';
import { Dispatch } from 'redux';
import { filterBy, orderBy, searchTask } from '../redux/tasks.actions';

const HeaderContainer = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 80%;
  padding-top: 2rem;
`;

const Controls= styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .selects-control {
    display: flex;
    flex-wrap: nowrap;
  }
`;

interface HeaderProps {
  orderBy: OrderBy;
  filterBy: FilterBy;
  searchTerm: string;
  dispatch: Dispatch;
}

class Header extends React.Component<HeaderProps> {

  handleOrderBy = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(orderBy(target.value));
  };

  handleFilterBy = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(filterBy(target.value));
  };

  handleSearch = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(searchTask(target.value));
  };

  render() {
    const { orderBy, filterBy, searchTerm } = this.props;
    return (
      <HeaderContainer>
        <Typography variant="h1">Todo List</Typography>
        <Controls>
          <div className="selects-control">
            <FormControl sx={{ mr: 1, width: 300 }}>
              <InputLabel id="filter">Filter By Status</InputLabel>
              <Select
                labelId="filter"
                id="demo-simple-select"
                label="Filter By Status"
                value={ filterBy }
                onChange={ this.handleFilterBy }
              >
                <MenuItem value={ FilterBy.All }>All</MenuItem>
                <MenuItem value={ FilterBy.Completed }>Complete</MenuItem>
                <MenuItem value={ FilterBy.Unfinished }>Unfinished</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: 300 }}>
              <InputLabel id="order">Order By Date</InputLabel>
              <Select
                labelId="order"
                id="demo-simple-select"
                label="Order By Date"
                value={ orderBy }
                onChange={ this.handleOrderBy }
              >
                <MenuItem value={ OrderBy.Current }>Current</MenuItem>
                <MenuItem value={ OrderBy.Old }>Old</MenuItem>
              </Select>
            </FormControl>
          </div>
          <HandleTaskModal isNewTask />
        </Controls>
        <TextField
          value={ searchTerm }
          onChange={ this.handleSearch }
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: 608 }}
        />
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ orderBy, filterBy, searchTerm }: GlobalStateType) => ({
  orderBy,
  filterBy,
  searchTerm,
});

export default connect(mapStateToProps)(Header);
