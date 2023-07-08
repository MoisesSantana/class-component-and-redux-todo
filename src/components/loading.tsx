import React from 'react';
import { CircularProgress } from '@mui/material';

class Loading extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <CircularProgress />
      </div>
    );
  }
}

export default Loading;
