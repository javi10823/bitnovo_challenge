import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'react-native-paper';

interface ButtonProps extends TouchableOpacityProps {
  width: string;
  height: string;
}

const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 6px;
  background-color: ${props =>
    props.disabled ? props.theme.colors.secondary : props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)<{disabled?: boolean}>`
  color: ${props =>
    props.disabled
      ? props.theme.colors.onSecondary
      : props.theme.colors.onPrimary};
  font-size: 16px;
`;

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  disabled = false,
  children,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      width={width}
      height={height}
      disabled={disabled}
      theme={theme}
      {...rest}>
      <ButtonText disabled={disabled} theme={theme}>
        {children}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
