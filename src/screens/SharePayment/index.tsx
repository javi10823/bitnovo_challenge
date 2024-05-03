import React, {useEffect, useMemo, useRef, useState} from 'react';
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
import Check from '../../assets/check.svg';
import LinkSvg from '../../assets/link.svg';
import {Alert, Linking, Share, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '../../../App';
import {formatCurrency} from '../../utils';
import PhoneInput from '../../components/PhoneInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

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
  const isFocused = useIsFocused();
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [shareWhats, setShareWhats] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const order = useMemo(() => route?.params.order, [route]);
  var socket = useRef(
    new WebSocket(
      `wss://payments.pre-bnvo.com/ws/merchant/${order.identifier}`,
    ),
  ).current;

  useEffect(() => {
    if (shareWhats) {
      AsyncStorage.getItem('phoneCode').then(phoneCode => {
        if (phoneCode) {
          return setCode(phoneCode);
        }
        navigation.navigate('selectPhoneCode');
      });
    }
  }, [shareWhats, navigation, isFocused]);

  useEffect(() => {
    socket.onclose = () => {
      Alert.alert('El pago fue cancelado', '', [
        {text: 'Cerrar', onPress: () => navigation.navigate('home')},
      ]);
    };
    socket.onmessage = () => {
      Alert.alert('El pago fue realizado con exito', '', [
        {text: 'Entendido', onPress: () => navigation.navigate('home')},
      ]);
    };
    return () => socket.close();
  }, [socket, navigation]);

  const onShareEmail = () =>
    Linking.openURL(`mailto:?subject=BinomoPay&body=${order.web_url}`);

  const onShareWhast = () =>
    Linking.openURL(
      `whatsapp://send?text=${order.web_url}&phone=${code}${phone}`,
    ).then(() => {
      setShowModal(true);
    });

  const onShare = async () => {
    try {
      await Share.share({
        message: order.web_url,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <Section>
      <TopContainer>
        <PaymentResumeContainer>
          <PaymentSvg />
          <View>
            <Typography variant="subtext" color={theme.colors.secondaryDark4}>
              {t('paymentRequest')}
            </Typography>
            <Typography variant="heading4">
              {formatCurrency(order.value, order.fiat)}
            </Typography>
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
            onPress={() => navigation.navigate('shareQr', {order})}>
            <QRSvg />
          </Button>
        </InputContainer>
        <TouchableOpacity style={styles.send} onPress={onShareEmail}>
          <TextInput
            leftIcon={<Email />}
            style={styles.input}
            value={t('sendByEmail')}
            editable={false}
          />
        </TouchableOpacity>

        {shareWhats ? (
          <PhoneInput
            code={code}
            onSend={onShareWhast}
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
        <TouchableOpacity style={styles.send} onPress={onShare}>
          <TextInput
            leftIcon={<Export />}
            style={styles.input}
            value={t('shareWithApps')}
            editable={false}
          />
        </TouchableOpacity>
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
      <Modal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.iconContainer}>
              <Check />
            </View>
          </View>
          <Typography variant="heading3" style={styles.modalText}>
            {t('solicitude')}
          </Typography>
          <Typography variant="subtext" style={styles.modalText}>
            {t('whatsShared')}.
          </Typography>
          <Button
            style={styles.continueButton}
            onPress={() => setShowModal(false)}>
            <Typography variant="heading6" style={styles.buttonText}>
              {t('understood')}
            </Typography>
          </Button>
        </View>
      </Modal>
    </Section>
  );
};

export default SharePayment;
