import {DefaultTheme, useTheme} from 'react-native-paper';

const colors = {
  primary: '#035AC5',
  onPrimary: '#FFFFFF',
  secondary: '#EAF3FF',
  onSecondary: '#71B0FD',
  tertiary: '#C0CCDA',
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
