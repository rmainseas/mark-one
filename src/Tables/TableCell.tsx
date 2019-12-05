import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface TableCellProps {
  /** Text or components to be displayed in the cell */
  children: ReactNode;
}

const StyledCell = styled.td`
  border-left: ${({ theme }): string => (theme.border.light)};
  border-right: ${({ theme }): string => (theme.border.light)};
  font-family: ${({ theme }): string => (theme.font.data.family)};
  font-size: ${({ theme }): string => (theme.font.data.size)};
  padding: ${({ theme }): string => (theme.ws.xsmall)};
  text-align: 'center';
`;

const TableCell: FunctionComponent<TableCellProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledCell theme={theme}>
      {children}
    </StyledCell>
  );
};

export default TableCell;