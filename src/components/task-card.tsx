import React from 'react';
import { Divider, Fab, ListItem, ListItemText, Typography, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const CustomListItem = styled(ListItem)`
  align-items: flex-start;
  position: relative;

  &:hover {
    transform: scale(1.015);
    cursor: pointer;
  }

  .btns-control {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

export class TaskCard extends React.Component {
  state = {
    showBtn: false,
  }

  handleShowBtn = () => {
    this.setState((prevState: { showBtn: boolean }) => ({ showBtn: !prevState.showBtn }))
  }

  render() {
    const { showBtn } = this.state;
    const listContentBlur = showBtn ? 'blur(3px)' : 'blur(0px)';

    return (
      <>
        <CustomListItem onClick={ this.handleShowBtn }>
          {
            showBtn && (
              <div className="btns-control">
                <Fab color="success" aria-label="complete" sx={{ mr: 1 }}>
                  <CheckIcon />
                </Fab>
                <Fab color="warning" aria-label="edit" sx={{ mr: 1 }}>
                  <EditIcon />
                </Fab>
                <Fab color="error" aria-label="remove">
                  <DeleteIcon />
                </Fab>
              </div>
            )
          }
          <ListItemText
            sx={{ width: '60%', filter: listContentBlur }}
            primary="Brunch this weekend?"
            secondary={
              <Typography variant="caption" width="80%" sx={{ display: 'inline-block' }}>
                — I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…
              </Typography>
            }
          />
          <aside style={{ filter: listContentBlur }}>
            <p>Status: Completed</p>
            <p>Created At: 05/06/2023</p>
          </aside>
        </CustomListItem>
        <Divider variant="inset" component="li" />  
      </>
    );
  }
}