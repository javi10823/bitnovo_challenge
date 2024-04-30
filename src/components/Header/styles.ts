import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondary5};
  flex-direction: row;
  height: 56px;
  padding-left: 18px;
  padding-right: 18px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary4};
`;

export const styles = StyleSheet.create({
  flexContainer: {flex: 1},
});
