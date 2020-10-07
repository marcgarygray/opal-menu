import styled from '@emotion/styled';
import MuiContainer from '@material-ui/core/Container';
import MuiToolbar from '@material-ui/core/Toolbar';
import TableRow from '@material-ui/core/TableRow';

export const Container = styled(MuiContainer)`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Toolbar = styled(MuiToolbar)`
  &.MuiToolbar-root {
    justify-content: space-between;
  }
`;

export const BottomRow = styled(TableRow)`
  border-top: 2px solid #000;
`;
