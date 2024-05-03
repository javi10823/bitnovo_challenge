import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  flex-grow: 1;
  padding-top: 25px;
  gap: 24px;
  padding-horizontal: 18px;
`;

export const InfoContainer = styled.View`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;
  gap: 8px;
  background-color: ${({theme}) => theme.colors.secondary6};
  border-radius: 6px;
  flex-direction: row;
`;

export const QrContainer = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${({theme}) => theme.colors.secondary5};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const styles = StyleSheet.create({
  text: {color: 'white', textAlign: 'center'},
});
