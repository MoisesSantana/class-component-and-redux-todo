import React from 'react';
import {  Box, Fab, FormControl, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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

export class Header extends React.Component {
  render() {
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
                value="All"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Complete">Complete</MenuItem>
                <MenuItem value="Uncompleted">Uncompleted</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: 300 }}>
              <InputLabel id="order">Order By Date</InputLabel>
              <Select
                labelId="order"
                id="demo-simple-select"
                label="Order By Date"
                value="Current"
              >
                <MenuItem value="Current">Current</MenuItem>
                <MenuItem value="Old">Old</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Fab variant="extended" color="primary" aria-label="add">
            <AddIcon sx={{ mr: 1 }} />
            New Todo
          </Fab>
        </Controls>
        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: 608 }} />
      </HeaderContainer>
    )
  }
}