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
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
gap: 2rem;

.selects-control {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 680px;
  width: 100%;

  @media (max-width: 770px) {
    width: 100%;
  }
}
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