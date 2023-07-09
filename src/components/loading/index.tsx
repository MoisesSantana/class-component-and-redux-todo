import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './styles';

class Loading extends React.Component {
  render() {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }
}

export default Loading;
