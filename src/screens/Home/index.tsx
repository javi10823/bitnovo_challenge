import {useState} from 'react';
import {View} from 'react-native';
import {NumberInput, TextInput, Typography} from '../../components';
import {styles} from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  return (
    <View style={[styles.section]}>
      <View style={[styles.containerNumberInput]}>
        <Typography variant="input">$</Typography>
        <NumberInput value={value} onChangeText={setValue} placeholder="0.00" />
      </View>
      <View style={[styles.containerTextInput]}>
        <View style={[styles.rowTextInput]}>
          <Typography variant="text">Concepto</Typography>
        </View>
        <TextInput
          width="100%"
          height="56"
          placeholder="Añade descripción del pago"
        />
      </View>
    </View>
  );
};

export default Home;
