import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Header } from './components/header';

const RootContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  width: 100vw;
  height: 100vh;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <RootContainer>
        <Header />
      </RootContainer>
    )
  }
}

export default App;
