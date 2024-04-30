import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const RowContainer = styled.Pressable`
  flex-direction: row;
  gap: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  align-items: center;
`;

export const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 'auto',
  },
});
