import React, {useCallback, useState} from 'react';
import {Input} from './styles';
import {ContentSizeChangeEvent, InputProps} from './types';

const TextInput = ({
  width,
  height: initialHeight,
  placeholderTextColor,
  maxLength = 140,
  ...props
}: InputProps) => {
  const [height, setHeight] = useState(initialHeight);
  const adjustHeight = useCallback((event: ContentSizeChangeEvent) => {
    const newHeight = event.nativeEvent.contentSize.height;
    setHeight(`${newHeight}px`);
  }, []);
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
