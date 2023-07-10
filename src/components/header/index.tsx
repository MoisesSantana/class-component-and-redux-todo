import React from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import HandleTaskModal from '../handle-task-modal';
import { connect } from 'react-redux';
import { FilterBy, GlobalStateType, HandleFiltersType, OrderBy } from '../../types';
import { Dispatch } from 'redux';
import {
  filterBy as actionFilterBy,
  orderBy as actionOrderBy,
  searchTask as actionSearchTask,
} from '../../redux/tasks.actions';
import { Controls, HeaderContainer, SearchField, SelectControl, SubControls } from './styles';

interface HeaderProps extends GlobalStateType {
  dispatch: Dispatch;
}

class Header extends React.Component<HeaderProps> {
  handleInputs = ({ target }, action: HandleFiltersType) => {
    const { dispatch } = this.props;
    dispatch(action(target.value));
  };

  render() {
    const { orderBy, filterBy, searchTerm } = this.props;
    return (
      <HeaderContainer>
        <Typography variant="h1" fontSize={48}>Todo List</Typography>
        <Controls>
          <SelectControl>
            <InputLabel id="filter">Filter By Status</InputLabel>
            <Select
              labelId="filter"
              id="demo-simple-select"
              label="Filter By Status"
              value={ filterBy }
              onChange={ (e) => this.handleInputs(e, actionFilterBy as HandleFiltersType) }
            >
              <MenuItem value={ FilterBy.All }>All</MenuItem>
              <MenuItem value={ FilterBy.Completed }>Complete</MenuItem>
              <MenuItem value={ FilterBy.Unfinished }>Unfinished</MenuItem>
            </Select>
          </SelectControl>
          <SelectControl>
            <InputLabel id="order">Order By Date</InputLabel>
            <Select
              labelId="order"
              id="demo-simple-select"
              label="Order By Date"
              value={ orderBy }
              onChange={ (e) => this.handleInputs(e, actionOrderBy as HandleFiltersType) }
            >
              <MenuItem value={ OrderBy.Current }>Current</MenuItem>
              <MenuItem value={ OrderBy.Old }>Old</MenuItem>
            </Select>
          </SelectControl>
        </Controls>
        <SubControls>
          <SearchField
            value={ searchTerm }
            onChange={ (e) => this.handleInputs(e, actionSearchTask as HandleFiltersType) }
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
          <HandleTaskModal isNewTask />
        </SubControls>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state : GlobalStateType) => ({ ...state });

export default connect(mapStateToProps)(Header);
