import styled from 'styled-components/native';
import {InputProps} from './types';

export const Input = styled.TextInput<InputProps>`
  width: ${props => props.width};
  min-height: ${props => props.height}px;
  border-radius: 6px;
  border: 1px solid #e5e9f2;
  font-family: 'Mulish';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px;
`;
