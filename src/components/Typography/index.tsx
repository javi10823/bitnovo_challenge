// Typography.tsx
import {Text, TextStyle} from 'react-native';

type VariantsKeys = 'heading5' | 'input' | 'text' | 'placeholder';

interface Props {
  variant: VariantsKeys;
  children: React.ReactNode;
  color?: string;
}

const variants: Record<VariantsKeys, TextStyle> = {
  heading5: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '700' as '700',
    lineHeight: 22,
  },
  input: {
    fontFamily: 'Mulish',
    fontSize: 40,
    fontWeight: '700' as '700',
    lineHeight: 50,
  },
  text: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '700' as '700',
    lineHeight: 20,
    color: '#002859',
  },
  placeholder: {
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '400' as '400',
    lineHeight: 16,
    color: '#647184',
  },
};

const Typography = ({variant, children, color}: Props) => {
  const style = {
    ...variants[variant],
    color: color || variants[variant].color || '#000',
  };
  return <Text style={style}>{children}</Text>;
};

export default Typography;
