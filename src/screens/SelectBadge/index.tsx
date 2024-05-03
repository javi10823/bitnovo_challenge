import {FlatList} from 'react-native';
import {Header, ListRow} from '../../components';
import {useLayoutEffect, useMemo, useState} from 'react';
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
import {Currency} from '../../config/types';
import {useTranslation} from 'react-i18next';
import Eur from '../../assets/eur.svg';
import Usd from '../../assets/usd.svg';
import Pound from '../../assets/georgia.svg';

export const CURRENCIES: Currency[] = [
  {
    symbol: '€',
    name: 'Euro',
    fiat: 'EUR',
    image: <Eur />,
  },
  {
    symbol: '$',
    name: 'Dólar Estadounidense',
    fiat: 'USD',
    image: <Usd />,
  },
  {
    symbol: '£',
    name: 'Libra Esterlina',
    fiat: 'GBP',
    image: <Pound />,
  },
];

const SelectBadge = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Currency>();

  const onSelect = async (id: string) => {
    const item = currencies.find(({fiat}) => fiat === id);
    if (item) {
      const {name, fiat, symbol} = item;
      await AsyncStorage.setItem(
        'currency',
        JSON.stringify({name, fiat, symbol}),
      );
    }
    setSelected(item);
  };

  const renderItems = ({fiat, image, name}: Currency) => (
    <ListRow
      isSelected={selected?.fiat === fiat}
      id={fiat}
      image={image}
      subtitle={fiat}
      title={name}
      onSelect={onSelect}
    />
  );

  const currencies = useMemo(() => {
    return CURRENCIES.filter(
      ({name, fiat}) =>
        name.toLowerCase().includes(search) ||
        fiat.toLowerCase().includes(search),
    );
  }, [search]);

  useLayoutEffect(() => {
    const getItems = async () => {
      const currency = await AsyncStorage.getItem('currency');
      currency && setSelected(JSON.parse(currency));
    };

    getItems();
  }, []);

  return (
    <Container>
      <Header title={t('selectHeader')} goBack />
      <Content>
        <SearchbarContainer>
          <Search />
          <SearchbarInput
            placeholder={t('search')}
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={theme.colors.secondaryDark4}
          />
        </SearchbarContainer>
        <FlatList
          contentContainerStyle={styles.flatListContent}
          renderItem={({item}) => renderItems(item)}
          data={currencies}
          keyExtractor={({fiat}) => fiat}
        />
      </Content>
    </Container>
  );
};

export default SelectBadge;
