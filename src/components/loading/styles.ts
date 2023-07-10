import { Box, styled } from '@mui/material';

export const LoadingContainer = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255 / 0.7);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;