import React from 'react';
import {StyledInput} from './styles';
import {TextStyle} from 'react-native';

type Props = {
  value: number | null;
  onChangeText: (text: number | null) => void;
  placeholder?: string;
  style?: TextStyle;
};

const NumberInput = ({value, onChangeText, placeholder, style}: Props) => (
  <StyledInput
    value={value}
    onChangeValue={onChangeText}
    placeholder={placeholder}
    placeholderTextColor={style?.color}
    style={style}
  />
);

export default NumberInput;
