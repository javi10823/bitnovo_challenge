import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {StyledButton} from './styles';
import {useAppTheme} from '../../config/theme';

const Button = ({disabled, children, ...rest}: TouchableOpacityProps) => {
  const theme = useAppTheme();
  return (
    <StyledButton disabled={disabled} theme={theme} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
