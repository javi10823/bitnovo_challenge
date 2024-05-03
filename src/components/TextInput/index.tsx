import React, {ReactElement, useState} from 'react';
import {Input, InputContainer} from './styles';
import {TextInputProps} from 'react-native';

export type Props = TextInputProps & {
  placeholderTextColor?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isActive?: boolean;
};

const TextInput = ({
  leftIcon,
  rightIcon,
  placeholderTextColor,
  maxLength,
  style,
  ...props
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <InputContainer isActive={isActive} style={style}>
      {leftIcon}
      <Input
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        maxLength={maxLength}
        style={style}
        isActive={isActive}
        {...props}
      />
      {rightIcon}
    </InputContainer>
  );
};

export default TextInput;
