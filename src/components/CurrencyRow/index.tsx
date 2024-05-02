import {View} from 'react-native';
import {Typography} from '..';
import {Avatar} from 'react-native-paper';
import VueRigth from '../../assets/vueRigth.svg';
import TickCircle from '../../assets/tickCircle.svg';
import {RowContainer, styles} from './styles';
import {useAppTheme} from '../../config/theme';
import {Currency} from '../../config/types';

interface Props {
  isSelected: boolean;
  item: Currency;
  onSelect: (item: Currency) => void;
}

const CurrencyRow = ({isSelected, item, onSelect}: Props) => {
  const theme = useAppTheme();
  return (
    <RowContainer
      onPress={() => onSelect(item)}
      disabled={isSelected}
      style={({pressed}) => ({
        backgroundColor: pressed
          ? theme.colors.secondary4
          : theme.colors.transparent,
      })}>
      <Avatar.Image size={32} source={{uri: item.image}} />
      <View>
        <Typography variant="text" color={theme.colors.primaryDark}>
          {item.name}
        </Typography>
        <Typography variant="placeholder">{item.fiat}</Typography>
      </View>
      <View style={styles.iconContainer}>
        {isSelected ? <TickCircle /> : <VueRigth />}
      </View>
    </RowContainer>
  );
};

export default CurrencyRow;
