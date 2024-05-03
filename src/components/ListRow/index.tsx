import {View} from 'react-native';
import {Typography} from '..';
import VueRigth from '../../assets/vueRigth.svg';
import TickCircle from '../../assets/tickCircle.svg';
import {RowContainer, styles} from './styles';
import {useAppTheme} from '../../config/theme';
import {ReactElement} from 'react';

interface Props {
  isSelected: boolean;
  image: ReactElement;
  title: string;
  subtitle: string;
  id: string;
  onSelect: (item: string) => void;
}

const ListRow = ({isSelected, image, title, subtitle, id, onSelect}: Props) => {
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
      {image}
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

export default ListRow;
