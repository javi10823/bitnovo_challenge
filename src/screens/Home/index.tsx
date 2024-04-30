import {useState} from 'react';
import {View} from 'react-native';
import {NumberInput, TextInput, Typography} from '../../components';
import {styles} from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const inputColor = value ? '#035AC5' : '#C0CCDA';
  const maxLength = 140;
  return (
    <View style={[styles.section]}>
      <View style={[styles.containerNumberInput]}>
        <Typography variant="input" color={inputColor}>
          $
        </Typography>
        <NumberInput
          value={value}
          onChangeText={setValue}
          placeholder="0,00"
          color={inputColor}
        />
      </View>
      <View style={[styles.containerTextInput]}>
        <View style={[styles.rowTextInput]}>
          <Typography variant="text">Concepto</Typography>
        </View>
        <TextInput
          width="100%"
          height="56"
          placeholder="Añade descripción del pago"
          onChangeText={setDescription}
          maxLength={maxLength}
        />
        {description.length > 0 && (
          <View style={[styles.rowCharactersTextInput]}>
            <Typography variant="placeholder">
              {`${description.length} / ${maxLength}`} caracteres
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
