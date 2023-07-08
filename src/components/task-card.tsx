import React from 'react';
import { Divider, Fab, ListItem, ListItemText, Typography, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { HandleTaskModal } from './handle-task-modal';


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
            primary="Brunch this weekend?"
            secondary={
              <Typography variant="caption" width="80%" sx={{ display: 'inline-block' }}>
                — I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this…
              </Typography>
            }
          />
          <aside role="complementary" onClick={ this.handleShowBtn } style={{ filter: listContentBlur }}>
            <p>Status: Completed</p>
            <p>Created At: 05/06/2023</p>
          </aside>
        </CustomListItem>
        <Divider variant="inset" component="li" />  
      </>
    );
  }
}