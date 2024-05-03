import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Section = styled.View`
  background-color: ${({theme}) => theme.colors.secondary5};
  padding-horizontal: 18px;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Container = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const NumberInputContainer = styled.View`
  margin-top: 64px;
  margin-bottom: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 18px;
  gap: 12px;
`;

export const TextInputContainer = styled.View`
  gap: 4px;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
  padding-bottom: 15px;
`;

export const CurrencySelector = styled.Pressable`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary9};
  height: 28px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 8px;
  border-radius: 24px;
`;

export const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#60617029',
  },
  button: {
    height: 56,
  },
  maxDescription: {textAlign: 'right'},
  currencySelectorContainer: {flexDirection: 'row-reverse'},
});
