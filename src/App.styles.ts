import { Box, Paper, styled } from '@mui/material';

export const RootContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

export const MainContainer = styled(Paper)`
  width: 80%;
  margin-top: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 200px);
`;