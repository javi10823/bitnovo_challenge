import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../config/theme';

export const Section = styled.View`
  background-color: ${theme.colors.secondary5};
  padding-horizontal: 18px;
  padding-top: 16px;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Container = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  margin-bottom: 20px;
  background-color: ${theme.colors.secondary10};
`;

export const PaymentResumeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ShareOptionsContainer = styled.View`
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const BottomContainer = styled.View`
  margin-top: auto;
  margin-bottom: 24px;
`;

export const InputContainer = styled.View`
  width: 100%;
  gap: 16px;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  qrButton: {width: 56, height: 56},
  input: {flexGrow: 1, color: theme.colors.primaryDark},
  buttonInput: {flexDirection: 'row'},
  newButton: {
    height: 56,
    backgroundColor: theme.colors.secondary10,
    gap: 12,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
  },
  blur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 413,
    maxHeight: 413,
    backgroundColor: 'white',
    padding: 18,
    paddingBottom: 44,
    paddingTop: 96,
    borderRadius: 24,
    marginTop: 'auto',
    marginHorizontal: 8,
  },
  modalText: {
    color: theme.colors.secondaryDark4,
    marginTop: 16,
    textAlign: 'center',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    paddingVertical: 18,
    marginTop: 24,
  },
  send: {flexDirection: 'row'},
  buttonText: {color: theme.colors.secondary5, textAlign: 'center'},
});
