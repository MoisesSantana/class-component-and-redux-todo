import { Box, FormControl, TextField, styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 80%;
  padding-top: 2rem;
`;

export const Controls= styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 680px;
  width: 100%;
`;

export const SearchField = styled(TextField)`
  width: 620px;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SelectControl = styled(FormControl)`
  width: 300px;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SubControls = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;