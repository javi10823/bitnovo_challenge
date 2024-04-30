import {ActivityIndicator, FlatList} from 'react-native';
import {Header} from '../../components';
import {useEffect, useMemo, useState} from 'react';
import {theme} from '../../config/theme';
import Search from '../../assets/search.svg';
import {
  Container,
  Content,
  SearchbarContainer,
  SearchbarInput,
  styles,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrencyRow from '../../components/CurrencyRow';

export type Currency = {
  symbol: string;
  name: string;
  min_amount: string;
  max_amount: string;
  image: string;
  blockchain: string;
};
const mockedData: Currency[] = [
  {
    symbol: 'BCH_TEST',
    name: 'Bitcoin Cash Test BCH',
    min_amount: '0.05',
    max_amount: '20000.00',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png',
    blockchain: 'BCH_TEST',
  },
  {
    symbol: 'BTC_TEST',
    name: 'Bitcoin Test BTC',
    min_amount: '0.01',
    max_amount: '10000.00',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png',
    blockchain: 'BTC_TEST',
  },
  {
    symbol: 'ETH_TEST5',
    name: 'Ethereum Sepolia ETH',
    min_amount: '0.05',
    max_amount: '20000.00',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyETH_Size36_px_StrokeON.png',
    blockchain: 'ETH_TEST5',
  },
  {
    symbol: 'XRP_TEST',
    name: 'Ripple Test XRP',
    min_amount: '0.01',
    max_amount: '20000.00',
    image:
      'https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyXRP_Size36_px_StrokeON.png',
    blockchain: 'XRP_TEST',
  },
];

const SelectBadge = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Currency[]>([]);
  const [selected, setSelected] = useState<Currency>();

  const onSelect = async (item: Currency) => {
    await AsyncStorage.setItem('currency', JSON.stringify(item));
    setSelected(item);
  };

  const renderItems = (item: Currency) => (
    <CurrencyRow
      isSelected={selected?.blockchain === item.blockchain}
      item={item}
      onSelect={onSelect}
    />
  );

  const currencies = useMemo(() => {
    return data.filter(
      ({name, blockchain}) =>
        name.toLowerCase().includes(search) ||
        blockchain.toLowerCase().includes(search),
    );
  }, [search, data]);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);

      const currency: Currency | undefined = JSON.parse(
        (await AsyncStorage.getItem('currency')) || '',
      );
      setData(mockedData);
      setSelected(currency);
      setLoading(false);
    };

    getItems();
  }, []);

  return (
    <Container>
      <Header title="Selecciona una divisa" goBack />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Content>
          <SearchbarContainer>
            <Search />
            <SearchbarInput
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              placeholderTextColor={theme.colors.secondaryDark4}
            />
          </SearchbarContainer>
          <FlatList
            contentContainerStyle={styles.flatListContent}
            renderItem={({item}) => renderItems(item)}
            data={currencies}
            keyExtractor={({blockchain}) => blockchain}
          />
        </Content>
      )}
    </Container>
  );
};

export default SelectBadge;
