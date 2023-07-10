import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { LoadingContainer } from './styles';

class Loading extends React.Component {
  render() {
    return (
      <LoadingContainer>
        <CircularProgress />
        <Typography variant="h6" component="h6">
          Loading...
        </Typography>
      </LoadingContainer>
    );
  }
}

export default Loading;
