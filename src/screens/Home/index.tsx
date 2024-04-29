import {Text} from 'react-native-paper';
import {useAppNavigation} from '../../../App';
import {View} from 'react-native';
import {Header} from '../../components';

const Home = () => {
  const {navigate} = useAppNavigation();

  return (
    <View>
      <Header title="Importe a pagar" />
      <Text onPress={() => navigate('selectBadge')}>$ 0.00</Text>
    </View>
  );
};

export default Home;
