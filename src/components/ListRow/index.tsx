import {View} from 'react-native';
import {Typography} from '..';
import {Avatar} from 'react-native-paper';
import VueRigth from '../../assets/vueRigth.svg';
import TickCircle from '../../assets/tickCircle.svg';
import {RowContainer, styles} from './styles';
import {useAppTheme} from '../../config/theme';

interface Props {
  isSelected: boolean;
  image: string;
  title: string;
  subtitle: string;
  id: string;
  onSelect: (item: string) => void;
}

const CurrencyRow = ({
  isSelected,
  image,
  title,
  subtitle,
  id,
  onSelect,
}: Props) => {
  const theme = useAppTheme();
  return (
    <RowContainer
      onPress={() => onSelect(id)}
      disabled={isSelected}
      style={({pressed}) => ({
        backgroundColor: pressed
          ? theme.colors.secondary4
          : theme.colors.transparent,
      })}>
      <Avatar.Image size={32} source={{uri: image}} />
      <View>
        <Typography variant="text" color={theme.colors.primaryDark}>
          {title}
        </Typography>
        <Typography variant="placeholder">{subtitle}</Typography>
      </View>
      <View style={styles.iconContainer}>
        {isSelected ? <TickCircle /> : <VueRigth />}
      </View>
    </RowContainer>
  );
};

export default CurrencyRow;
