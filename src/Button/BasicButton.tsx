import React, {
  FunctionComponent, MouseEventHandler, ReactNode, ReactElement,
} from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactNode;
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in style properties for the element */
  theme?: object;
}

const StyledButton = styled.button`
  cursor: pointer;
  border: ${({ theme }): string => (theme.border ? theme.border.light : '1px solid black')};
  padding: ${({ theme }): string => (theme.ws ? theme.ws.xsmall + ' ' + theme.ws.small : '10px')};
  fontSize: ${({ theme }): string => (theme.font ? theme.font.body.size : '12px')};
  fontWeight: ${({ theme }): string => (theme.font ? theme.font.light : '200')};
  color: ${({ theme }): string => (theme.text ? theme.text.dark : 'black')};
`;

const BasicButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    children,
    clickHandler,
    disabled,
    theme,
  } = props;
  return (
    <StyledButton
      onClick={clickHandler}
      theme={theme}
      disabled={disabled}
    >
      { children }
    </StyledButton>
  );
};

BasicButton.defaultProps = {
  children: '',
};

export default BasicButton;
