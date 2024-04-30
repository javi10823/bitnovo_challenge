import React from 'react';
import {StyledInput} from './styles';
import {ExtendedNumberInputProps} from './types';

const NumberInput: React.FC<ExtendedNumberInputProps> = ({
  value,
  onChangeText,
  placeholder,
  color,
}) => {
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={color}
      style={{color}}
    />
  );
};

export default NumberInput;
