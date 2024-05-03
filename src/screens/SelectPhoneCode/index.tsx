import {FlatList} from 'react-native';
import {Header, ListRow} from '../../components';
import {ReactElement, useLayoutEffect, useMemo, useState} from 'react';
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
import Spain from '../../assets/spain.svg';
import Ecuatorial from '../../assets/ecuatorial.svg';
import Grec from '../../assets/grec.svg';
import Georgia from '../../assets/georgia.svg';
import Guatemala from '../../assets/guatemala.svg';
import Guayana from '../../assets/guayana.svg';
import HongKong from '../../assets/hongKong.svg';
import Honduras from '../../assets/honduras.svg';

interface PhoneCode {
  code: string;
  flag: ReactElement;
  name: string;
}

const PHONE_CODES: PhoneCode[] = [
  {
    name: 'España',
    code: '+34',
    flag: <Spain />,
  },
  {
    name: 'Equatorial Guinea',
    code: '+240',
    flag: <Ecuatorial />,
  },
  {
    name: 'Grecia',
    code: '+30',
    flag: <Grec />,
  },
  {
    name: 'Southgeorgia and the S...',
    code: '+500',
    flag: <Georgia />,
  },
  {
    name: 'Guatemala',
    code: '+502',
    flag: <Guatemala />,
  },
  {
    name: 'Guayana',
    code: '+592',
    flag: <Guayana />,
  },
  {
    name: 'Hong Kong',
    code: '+852',
    flag: <HongKong />,
  },
  {
    name: 'Honduras',
    code: '+504',
    flag: <Honduras />,
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

      phoneCode && setSelected(phoneCode);
    };

    getItems();
  }, []);

  return (
    <Container>
      <Header title={t('selectPhoneHeader')} goBack />
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
