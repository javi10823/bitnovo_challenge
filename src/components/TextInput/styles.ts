import styled from 'styled-components/native';

export const Input = styled.TextInput<{isActive: boolean}>`
  font-family: 'Mulish';
  min-height: 56px;
  max-height: 112px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding-vertical: 8px;
  flex: 1;
`;

export const InputContainer = styled.View<{isActive: boolean}>`
  flex-direction: row;
  padding-horizontal: 8px;
  gap: 12px;
  align-items: center;
  min-height: 56px;
  max-height: 112px;
  border-radius: 6px;
  border: 1px solid
    ${({theme, isActive}) =>
      isActive ? theme.colors.primary : theme.colors.secondary3};
`;
