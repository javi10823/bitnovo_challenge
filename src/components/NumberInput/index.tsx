import React from 'react';
import {StyledInput} from './styles';
import {ExtendedNumberInputProps} from './types';

const NumberInput = ({
  value,
  onChangeText,
  placeholder,
  style,
}: ExtendedNumberInputProps) => (
  <StyledInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor={style?.color}
    style={style}
  />
);

export default NumberInput;
