import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary5};
  flex: 1;
`;

export const Content = styled.View`
  padding-horizontal: 18px;
  gap: 20px;
`;

export const styles = StyleSheet.create({
  flatListContent: {
    gap: 4,
  },
});

// Searchbar
export const SearchbarContainer = styled.View`
  width: 100%;
  height: 48px;
  padding: 14px 12px;
  gap: 8px;
  border-color: ${({theme}) => theme.colors.secondary3};
  border-radius: 6px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
`;

export const SearchbarInput = styled.TextInput`
  font-family: 'Mulish';
  font-size: 14px;
  flex: 1;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 0;
`;
