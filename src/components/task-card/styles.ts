import { ListItem, styled } from '@mui/material';

export const CustomListItem = styled(ListItem)`
  align-items: flex-start;

  aside {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btns-control {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;