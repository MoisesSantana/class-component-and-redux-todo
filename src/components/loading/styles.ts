import { Box, styled } from '@mui/material';

export const LoadingContainer = styled(Box)`
  position: fixed;
  width: 80vw;
  height: calc(100vh - 200px);
  min-height: 300px;
  background-color: rgba(255 255 255 / 0.7);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;