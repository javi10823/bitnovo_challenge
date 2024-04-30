import {DefaultTheme, useTheme} from 'react-native-paper';

const colors = {
  primary: '#035AC5',
  secondary: '#EAF3FF',
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
