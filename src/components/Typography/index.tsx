import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../../config/theme';

type VariantsKeys = 'heading5' | 'text' | 'subText';

const variants: Record<VariantsKeys, StyleProp<TextStyle>> = {
  heading5: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: theme.colors.primaryDark,
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: theme.colors.primaryDark,
  },
  subText: {
    fontFamily: 'Mulish',
    fontSize: 12,
    lineHeight: 16,
    color: theme.colors.textBackground,
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
