import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

export const styles = StyleSheet.create({
  input: {flexGrow: 1, color: '#002859'},
  leftIconContainer: {flexDirection: 'row', alignItems: 'center', gap: 8},
  sendButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
