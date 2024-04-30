import styled from 'styled-components/native';

export const StyledInput = styled.TextInput.attrs(() => ({
  keyboardType: 'numeric',
  placeholderTextColor: '#C0CCDA',
}))`
  font-family: 'Mulish-Bold';
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  color: #c0ccda;
  height: auto;
  min-width: 100px;
  width: auto;
`;
