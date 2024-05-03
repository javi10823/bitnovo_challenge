import React, {useMemo} from 'react';
import {Button, TextInput, Typography} from '..';
import {TouchableOpacity, View} from 'react-native';
import WhatsApp from '../../assets/whatsapp.svg';
import VueDown from '../../assets/vueDown.svg';
import {useAppNavigation} from '../../../App';
import {useAppTheme} from '../../config/theme';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

interface Props {
  code: string;
  phone: string;
  onChange: (value: string) => void;
  onSend: (phone: string) => void;
}

const PhoneInput = ({code, phone, onChange, onSend}: Props) => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const theme = useAppTheme();

  const renderRigthIcon = useMemo(
    () => (
      <Button style={styles.sendButton} onPress={() => onSend(phone)}>
        <Typography
          variant="smallBold"
          style={{
            color: theme.colors.secondary5,
          }}>
          {t('send')}
        </Typography>
      </Button>
    ),
    [t, theme, phone, onSend],
  );

  const renderLeftIcon = useMemo(() => {
    return (
      <View style={styles.leftIconContainer}>
        <WhatsApp />
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={() => navigation.navigate('selectPhoneCode')}>
          <Typography variant="subtext" color={theme.colors.primaryDark}>
            {code}
          </Typography>
          <VueDown />
        </TouchableOpacity>
      </View>
    );
  }, [theme, navigation, code]);

  const formatPhone = (value: string) => {
    const number = value.replace(/\D/g, '');

    const length = number.length;
    if (length <= 3) {
      return number;
    } else if (length <= 6) {
      return `${number.slice(0, 3)} ${number.slice(3)}`;
    } else {
      return `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
    }
  };

  const handleChange = (value: string) => {
    const numeroFormateado = formatPhone(value);
    onChange(numeroFormateado);
  };

  return (
    <>
      <TextInput
        placeholder="XXX XXX XXXX"
        leftIcon={renderLeftIcon}
        maxLength={12}
        keyboardType="numeric"
        rightIcon={renderRigthIcon}
        style={styles.input}
        onChangeText={handleChange}
        value={phone}
      />
    </>
  );
};

export default PhoneInput;
