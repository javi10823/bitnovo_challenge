import {DefaultTheme, useTheme} from 'react-native-paper';

const colors = {
  primary: '#035AC5',
  primaryDark: '#002859',
  textBackground: '#647184',
  secondary5: '#FFFFFF',
  secondary4: '#EFF2F7',
  secondary3: '#E5E9F2',
  secondaryDark4: '#647184',
  transparent: 'transparent',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

type CustomTheme = typeof theme;
export const useAppTheme = useTheme<CustomTheme>;
