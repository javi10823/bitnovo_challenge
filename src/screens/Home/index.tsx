import React, {useMemo, useState} from 'react';
import {Button, NumberInput, TextInput, Typography} from '../../components';
import {
  ButtonContainer,
  NumberInputContainer,
  Section,
  StyledRow,
  TextInputContainer,
} from './styles';
import {useAppTheme} from '../../config/theme';
import {useTranslation} from 'react-i18next';
import {BUTTON_HEIGHT, MARGIN, MAX_LENGTH, PADDING} from '../../constants';

const Home = () => {
  const {t} = useTranslation();
  const theme = useAppTheme();
  const [value, setValue] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const inputColor = useMemo(
    () => (value ? theme.colors.primary : theme.colors.secondary8),
    [value, theme.colors],
  );

  return (
    <Section>
      <NumberInputContainer>
        <Typography variant="input" color={inputColor}>
          $
        </Typography>
        <NumberInput
          value={value}
          onChangeText={setValue}
          placeholder="0,00"
          style={{color: inputColor}}
        />
      </NumberInputContainer>
      <TextInputContainer>
        <StyledRow
          paddingLeft={PADDING}
          marginBottom={MARGIN}
          width="100%"
          justifyContent="center"
          alignItems="flex-start">
          <Typography variant="text" color={theme.colors.primaryDark}>
            {t('concept')}
          </Typography>
        </StyledRow>
        <TextInput
          width="100%"
          height="56"
          placeholder={t('addPaymentDescription')}
          onChangeText={setDescription}
          maxLength={MAX_LENGTH}
        />
        {description.length > 0 && (
          <StyledRow
            paddingLeft={PADDING}
            marginBottom={MARGIN}
            width="100%"
            justifyContent="center"
            alignItems="flex-end">
            <Typography variant="placeholder">
              {t('characterCount', {
                count: description.length,
                max: MAX_LENGTH,
              })}
            </Typography>
          </StyledRow>
        )}
      </TextInputContainer>
      <ButtonContainer>
        <Button
          width="100%"
          height={BUTTON_HEIGHT}
          disabled={value.length === 0}
          onPress={() => console.log('Button Pressed')}>
          {t('continue')}
        </Button>
      </ButtonContainer>
    </Section>
  );
};

export default Home;
