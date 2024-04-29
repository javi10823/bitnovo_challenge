import {Text} from 'react-native-paper';
import {useAppNavigation} from '../../../App';
import {View} from 'react-native';
import {Header} from '../../components';

const SelectBadge = () => {
  const {goBack} = useAppNavigation();

  return (
    <View>
      <Header title="Importe a pagar" />
      <Text onPress={() => goBack()}>$ 0.00</Text>
    </View>
  );
};

export default SelectBadge;
