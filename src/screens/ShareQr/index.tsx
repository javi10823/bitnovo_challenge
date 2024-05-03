import {useTranslation} from 'react-i18next';
import {Header, Typography} from '../../components';
import InfoCircle from '../../assets/infoCircle.svg';
import {Container, InfoContainer, QrContainer, styles} from './styles';
import QRCode from 'react-native-qrcode-svg';
import {useMemo} from 'react';
import {formatCurrency} from '../../utils';

interface Props {
  route?: {
    params: {
      order: any;
    };
  };
}

const ShareQr = ({route}: Props) => {
  const {t} = useTranslation();

  const order = useMemo(() => route?.params.order, [route]);

  return (
    <>
      <Header goBack />
      <Container>
        <InfoContainer>
          <InfoCircle />
          <Typography variant="placeholder">{t('scanQr')}</Typography>
        </InfoContainer>
        <QrContainer>
          <QRCode
            value={order.web_url}
            size={300}
            logoBackgroundColor="white"
          />
        </QrContainer>
        <Typography variant="heading3" style={styles.text}>
          {formatCurrency(order.value, order.fiat)}
        </Typography>

        <Typography variant="subtext" style={styles.text}>
          {t('autoUpdate')}
        </Typography>
      </Container>
    </>
  );
};

export default ShareQr;
