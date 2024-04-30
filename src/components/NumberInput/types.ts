import {TextStyle} from 'react-native';

export type NumberInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export interface ExtendedNumberInputProps extends NumberInputProps {
  style?: TextStyle;
}
