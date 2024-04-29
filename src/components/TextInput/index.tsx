import React from 'react';
import {Input} from './styles';
import {InputProps} from './types';

const TextInput: React.FC<InputProps> = ({
  width,
  height,
  placeholderTextColor = '#647184',
  ...props
}) => {
  return (
    <Input
      width={width}
      height={height}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default TextInput;
