import React, {useState} from 'react';
import {Input} from './styles';
import {TextInputProps} from 'react-native';

export type Props = TextInputProps & {
  placeholderTextColor?: string;
  isActive?: boolean;
};

const TextInput = ({placeholderTextColor, maxLength, ...props}: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Input
      placeholderTextColor={placeholderTextColor}
      multiline={true}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      maxLength={maxLength}
      isActive={isActive}
      {...props}
    />
  );
};

export default TextInput;
