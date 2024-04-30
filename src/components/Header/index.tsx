import React from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from '../Typography';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Typography variant="heading5">Custom Header</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Header;
