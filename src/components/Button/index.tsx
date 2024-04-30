import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  width: string;
  height: string;
}

const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 6px;
  background-color: ${props => (props.disabled ? '#EAF3FF' : '#035AC5')};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)<{disabled?: boolean}>`
  color: ${props => (props.disabled ? '#71B0FD' : '#FFFFFF')};
  font-size: 16px;
`;

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <StyledButton width={width} height={height} disabled={disabled} {...rest}>
      <ButtonText disabled={disabled}>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
