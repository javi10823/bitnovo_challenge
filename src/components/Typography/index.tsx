import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';

type VariantsKeys = 'heading5' | 'input' | 'text';

const variants: Record<VariantsKeys, StyleProp<TextStyle>> = {
  heading5: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
  input: {
    fontFamily: 'Mulish',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    color: '#C0CCDA',
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#002859',
  },
};

interface Props {
  variant: VariantsKeys;
  children: string | ReactElement;
}

const Typography = ({variant, children}: Props) => {
  return <Text style={variants[variant]}>{children}</Text>;
};

export default Typography;
