import {ReactElement} from 'react';
import Typography from '../Typography';
import {View} from 'react-native';
import {useAppNavigation} from '../../../App';
import ArrowLeft from '../../assets/arrowLeft.svg';
import {BackButton, HeaderContainer, styles} from './styles';

interface Props {
  title: string;
  goBack: boolean;
  rigthHeader?: ReactElement;
  leftHeader?: ReactElement;
}

const Header = ({title, leftHeader, goBack}: Props) => {
  const navigation = useAppNavigation();

  return (
    <HeaderContainer>
      <View style={styles.flexContainer}>
        {goBack && (
          <BackButton onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </BackButton>
        )}
      </View>
      <Typography variant="heading5">{title}</Typography>
      <View style={styles.flexContainer}>{leftHeader}</View>
    </HeaderContainer>
  );
};

export default Header;
