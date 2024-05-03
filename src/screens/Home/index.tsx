import React, {useLayoutEffect, useMemo, useState} from 'react';
import {
  Button,
  Header,
  NumberInput,
  TextInput,
  Typography,
} from '../../components';
import {
  ButtonContainer,
  CurrencySelector,
  NumberInputContainer,
  Section,
  styles,
  TextInputContainer,
} from './styles';
import {useAppTheme} from '../../config/theme';
import {useTranslation} from 'react-i18next';
import {MAX_LENGTH} from '../../constants';
import {Alert, View} from 'react-native';
import {useAppNavigation} from '../../../App';
import VueDown from '../../assets/vueDown.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {Currency} from '../../config/types';
import {apiService} from '../../service';

const Home = () => {
  const {t} = useTranslation();
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  const navigation = useAppNavigation();
  const [currency, setCurrency] = useState<Currency>();
  const [value, setValue] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const inputColor = useMemo(
    () => (value ? theme.colors.primary : theme.colors.secondary8),
    [value, theme.colors],
  );

  const renderRightHeader = useMemo(
    () => (
      <View style={styles.currencySelectorContainer}>
        <CurrencySelector onPress={() => navigation.navigate('selectBadge')}>
          <Typography variant="smallBold">{currency?.fiat}</Typography>
          <VueDown />
        </CurrencySelector>
      </View>
    ),
    [navigation, currency],
  );

  const generateOrder = async () => {
    setLoading(true);
    await apiService
      .post('/orders/', {
        expected_output_amount: value,
        fiat: currency?.fiat,
        reference: description,
      })
      .then(response => {
        const order = response.data;
        navigation.navigate('sharePayment', {order: {...order, value}});
        setValue(null);
      })
      .catch(() => {
        Alert.alert(t('orderError'));
      });
    setLoading(false);
  };

  const disabled = useMemo(
    () => loading || !currency || !value,
    [value, currency, loading],
  );

  useLayoutEffect(() => {
    const getCurrency = async () => {
      const selectedCurrency = await AsyncStorage.getItem('currency');
      if (selectedCurrency) {
        return setCurrency(JSON.parse(selectedCurrency));
      }
      navigation.navigate('selectBadge');
    };
    getCurrency();
  }, [isFocused, navigation]);

  return (
    <>
      <Header
        title={t('homeHeader')}
        style={styles.header}
        rigthHeader={renderRightHeader}
      />
      <Section>
        <NumberInputContainer>
          <Typography variant="input" color={inputColor}>
            {currency?.symbol}
          </Typography>
          <NumberInput
            value={value}
            onChangeText={setValue}
            placeholder="0,00"
            style={{color: inputColor}}
          />
        </NumberInputContainer>
        <TextInputContainer>
          <Typography variant="text" color={theme.colors.primaryDark}>
            {t('concept')}
          </Typography>
          <TextInput
            placeholder={t('addPaymentDescription')}
            onChangeText={setDescription}
            multiline
            maxLength={MAX_LENGTH}
          />
          {description.length > 0 && (
            <Typography variant="placeholder" style={styles.maxDescription}>
              {t('characterCount', {
                count: description.length,
                max: MAX_LENGTH,
              })}
            </Typography>
          )}
        </TextInputContainer>
        <ButtonContainer>
          <Button
            style={styles.button}
            disabled={disabled}
            onPress={generateOrder}>
            <Typography
              variant="heading6"
              style={{
                color: disabled
                  ? theme.colors.secondary7
                  : theme.colors.secondary5,
              }}>
              {t('continue')}
            </Typography>
          </Button>
        </ButtonContainer>
      </Section>
    </>
  );
};

export default Home;
