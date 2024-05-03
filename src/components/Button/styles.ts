import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

export const StyledButton = styled(TouchableOpacity)<TouchableOpacityProps>`
  border-radius: 6px;
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.secondary6 : theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
