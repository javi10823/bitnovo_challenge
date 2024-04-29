import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';

type VariantsKeys = 'heading5';

const variants: Record<VariantsKeys, StyleProp<TextStyle>> = {
  heading5: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
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
