import styled from 'styled-components/native';

export const Input = styled.TextInput<{isActive: boolean}>`
  font-family: 'Mulish';
  min-height: 56px;
  max-height: 112px;
  border-radius: 6px;
  border: 1px solid
    ${({theme, isActive}) =>
      isActive ? theme.colors.primary : theme.colors.secondary3};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px;
`;
