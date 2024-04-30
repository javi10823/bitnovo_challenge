import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonText, StyledButton} from './styles';
import {useAppTheme} from '../../config/theme';

interface ButtonProps extends TouchableOpacityProps {
  width?: string;
  height?: string;
}

const Button = ({
  width = 'auto',
  height = 'auto',
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useAppTheme();
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
