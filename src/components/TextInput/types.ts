import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  width: string;
  height: string;
  placeholderTextColor?: string;
};
