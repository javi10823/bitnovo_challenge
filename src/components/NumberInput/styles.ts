import styled from 'styled-components/native';
import CurrencyInput from 'react-native-currency-input';

export const StyledInput = styled(CurrencyInput).attrs(() => ({
  keyboardType: 'numeric',
}))`
  font-family: 'Mulish-Bold';
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  height: 50px;
  padding: 0px;
  min-width: 80px;
  width: auto;
`;
