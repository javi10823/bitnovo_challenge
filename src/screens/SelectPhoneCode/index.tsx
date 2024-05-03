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
import {useTranslation} from 'react-i18next';

interface PhoneCode {
  code: string;
  flag: string;
  name: string;
}

const PHONE_CODES: PhoneCode[] = [
  {
    name: 'España',
    code: '+34',
    flag: '',
  },
];

const SelectPhoneCode = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string>();

  const onSelect = async (item: string) => {
    await AsyncStorage.setItem('phoneCode', item);
    setSelected(item);
  };

  const renderItems = (item: PhoneCode) => (
    <ListRow
      isSelected={selected === item.code}
      image={item.flag}
      id={item.code}
      title={item.code}
      subtitle={item.name}
      onSelect={onSelect}
    />
  );

  const currencies = useMemo(() => {
    return PHONE_CODES.filter(({name}) => name.toLowerCase().includes(search));
  }, [search]);

  useLayoutEffect(() => {
    const getItems = async () => {
      const phoneCode = await AsyncStorage.getItem('phoneCode');
      console.log('phoneCode', phoneCode);

      phoneCode && setSelected(phoneCode);
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
          keyExtractor={({code}) => code}
        />
      </Content>
    </Container>
  );
};

export default SelectPhoneCode;
