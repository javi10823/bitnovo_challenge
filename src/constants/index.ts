import {Currency} from '../config/types';

export const MAX_LENGTH = 140;

export const CURRENCIES: Currency[] = [
  {
    symbol: '€',
    name: 'Euro',
    fiat: 'EUR',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png',
  },
  {
    symbol: '$',
    name: 'Dólar Estadounidense',
    fiat: 'USD',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png',
  },
  {
    symbol: '£',
    name: 'Libra Esterlina',
    fiat: 'GBP',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png',
  },
];
