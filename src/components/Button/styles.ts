import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ButtonProps} from './types';

export const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  width: ${({width = 'auto'}) => width};
  height: ${({height = 'auto'}) => height};
  border-radius: 6px;
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.secondary6 : theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)<{disabled?: boolean}>`
  color: ${({disabled, theme}) =>
    disabled ? theme.colors.secondary7 : theme.colors.secondary5};
  font-size: 16px;
`;
