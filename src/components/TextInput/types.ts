import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  width: string;
  height: string;
  placeholderTextColor?: string;
};

export interface ContentSize {
  width: number;
  height: number;
}

export interface NativeEvent {
  contentSize: ContentSize;
}

export interface ContentSizeChangeEvent {
  nativeEvent: NativeEvent;
}
