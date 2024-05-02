import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonText, StyledButton} from './styles';
import {useAppTheme} from '../../config/theme';

const Button = ({disabled, children, ...rest}: TouchableOpacityProps) => {
  const theme = useAppTheme();
  return (
    <StyledButton disabled={disabled} theme={theme} {...rest}>
      <ButtonText disabled={disabled} theme={theme}>
        {children}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
