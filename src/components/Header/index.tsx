import {ReactElement} from 'react';
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Typography from '../Typography';
import {useAppNavigation} from '../../../App';
import ArrowLeft from '../../assets/arrowLeft.svg';
import {BackButton, HeaderContainer, styles} from './styles';

interface Props {
  title?: string;
  style?: StyleProp<ViewStyle>;
  goBack?: boolean;
  rigthHeader?: ReactElement;
}

const Header = ({title, rigthHeader, goBack, style}: Props) => {
  const navigation = useAppNavigation();

  return (
    <HeaderContainer style={style}>
      <View style={styles.flexContainer}>
        {goBack && (
          <BackButton onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </BackButton>
        )}
      </View>
      <Typography variant="heading5">{title}</Typography>
      <View style={styles.flexContainer}>{rigthHeader}</View>
    </HeaderContainer>
  );
};

export default Header;
