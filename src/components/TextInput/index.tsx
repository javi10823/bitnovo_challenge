import React, {useState} from 'react';
import {Input} from './styles';
import {ContentSizeChangeEvent, InputProps} from './types';

const TextInput: React.FC<InputProps> = ({
  width,
  height: initialHeight,
  placeholderTextColor = '#647184',
  maxLength = 140,
  ...props
}) => {
  const [height, setHeight] = useState(initialHeight);
  const adjustHeight = (event: ContentSizeChangeEvent) => {
    const newHeight = event.nativeEvent.contentSize.height;
    setHeight(`${newHeight}px`);
  };
  return (
    <Input
      width={width}
      height={height}
      placeholderTextColor={placeholderTextColor}
      multiline={true}
      maxLength={maxLength}
      onContentSizeChange={adjustHeight}
      {...props}
    />
  );
};

export default TextInput;
