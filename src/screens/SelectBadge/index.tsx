import {FlatList} from 'react-native';
import {Header} from '../../components';
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
import CurrencyRow from '../../components/CurrencyRow';
import {Currency} from '../../config/types';
import {CURRENCIES} from '../../constants';
import {useTranslation} from 'react-i18next';

const SelectBadge = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Currency>();

  const onSelect = async (item: Currency) => {
    await AsyncStorage.setItem('currency', JSON.stringify(item));
    setSelected(item);
  };

  const renderItems = (item: Currency) => (
    <CurrencyRow
      isSelected={selected?.fiat === item.fiat}
      item={item}
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
