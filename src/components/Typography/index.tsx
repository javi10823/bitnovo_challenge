import {ReactElement, ReactNode} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {useAppTheme} from '../../config/theme';

type VariantsKeys =
  | 'heading5'
  | 'input'
  | 'text'
  | 'placeholder'
  | 'text'
  | 'smallBold';

interface Props {
  variant: VariantsKeys;
  children: string | ReactElement | ReactNode;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Typography = ({variant, children, color, style}: Props) => {
  const theme = useAppTheme();

  const variants: Record<VariantsKeys, TextStyle> = {
    heading5: {
      fontFamily: 'Mulish',
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 22,
      color: theme.colors.primaryDark,
    },
    input: {
      fontFamily: 'Mulish',
      fontSize: 40,
      fontWeight: '700',
      lineHeight: 50,
      color: color || theme.colors.secondary8,
    },
    text: {
      fontFamily: 'Mulish',
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
      color: color || theme.colors.primary,
    },
    placeholder: {
      fontFamily: 'Mulish',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      color: color || theme.colors.secondaryDark4,
    },
    smallBold: {
      fontFamily: 'Mulish',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 16,
      color: color || theme.colors.primaryDark,
    },
  };

  return <Text style={[variants[variant], style]}>{children}</Text>;
};

export default Typography;
