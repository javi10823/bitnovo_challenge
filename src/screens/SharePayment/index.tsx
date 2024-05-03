import React, {useEffect, useMemo, useState} from 'react';
import {Button, TextInput, Typography} from '../../components';
import {
  TopContainer,
  BottomContainer,
  Section,
  ShareOptionsContainer,
  PaymentResumeContainer,
  InputContainer,
  styles,
} from './styles';
import {useAppTheme} from '../../config/theme';
import {useTranslation} from 'react-i18next';
import PaymentSvg from '../../assets/payment.svg';
import QRSvg from '../../assets/qr.svg';
import Wallet from '../../assets/wallet.svg';
import Email from '../../assets/email.svg';
import Export from '../../assets/export.svg';
import WhatsApp from '../../assets/whatsapp.svg';
import LinkSvg from '../../assets/link.svg';
import {TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '../../../App';
import PhoneInput from '../../components/PhoneInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  route?: {
    params: {
      order: any;
    };
  };
}

const SharePayment = ({route}: Props) => {
  const {t} = useTranslation();
  const theme = useAppTheme();
  const navigation = useAppNavigation();
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [shareWhats, setShareWhats] = useState(false);

  const order = useMemo(() => route?.params.order, [route]);

  const formattedPrice = useMemo(() => {
    return order.value.toLocaleString('es-ES', {
      style: 'currency',
      currency: order.fiat,
    });
  }, [order]);

  useEffect(() => {
    if (shareWhats) {
      AsyncStorage.getItem('phoneCode').then(phoneCode => {
        if (phoneCode) {
          return setCode(phoneCode);
        }
        navigation.navigate('selectPhoneCode');
      });
    }
  }, [shareWhats, navigation]);

  return (
    <Section>
      <TopContainer>
        <PaymentResumeContainer>
          <PaymentSvg />
          <View>
            <Typography variant="subtext" color={theme.colors.secondaryDark4}>
              {t('paymentRequest')}
            </Typography>
            <Typography variant="heading4">{formattedPrice}</Typography>
          </View>
        </PaymentResumeContainer>
        <Typography variant="placeholder">
          {t('sharePaymentLinkWithCustomer')}
        </Typography>
      </TopContainer>

      <ShareOptionsContainer>
        <InputContainer>
          <TextInput
            leftIcon={<LinkSvg />}
            style={styles.input}
            value={order.web_url}
            editable={false}
          />
          <Button
            style={styles.qrButton}
            onPress={() => console.log('Button Pressed')}>
            <QRSvg />
          </Button>
        </InputContainer>

        <TextInput
          leftIcon={<Email />}
          style={styles.input}
          value={t('sendByEmail')}
          editable={false}
        />

        {shareWhats ? (
          <PhoneInput
            code={code}
            phone={phone}
            onChange={value => setPhone(value)}
          />
        ) : (
          <TouchableOpacity
            style={styles.buttonInput}
            onPress={() => setShareWhats(true)}>
            <TextInput
              leftIcon={<WhatsApp />}
              style={styles.input}
              value={t('shareWithWhatsapp')}
              editable={false}
            />
          </TouchableOpacity>
        )}
        <TextInput
          leftIcon={<Export />}
          style={styles.input}
          value={t('shareWithApps')}
          editable={false}
        />
      </ShareOptionsContainer>

      <BottomContainer>
        <Button
          style={styles.newButton}
          onPress={() => navigation.navigate('home')}>
          <Typography
            variant="heading6"
            style={{
              color: theme.colors.primary,
            }}>
            {t('newRequest')}
          </Typography>
          <Wallet />
        </Button>
      </BottomContainer>
    </Section>
  );
};

export default SharePayment;
