import React from 'react';
import {StyledInput} from './styles';
import {NumberInputProps} from './types';

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default NumberInput;
