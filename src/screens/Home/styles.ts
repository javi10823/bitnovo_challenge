import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNumberInput: {
    width: '90%',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextInput: {
    width: '90%',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowTextInput: {
    paddingLeft: 5,
    marginBottom: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowCharactersTextInput: {
    paddingRight: 5,
    marginTop: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
