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

const maxLength = 140;

const Home = () => {
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
          paddingLeft={10}
          marginBottom={10}
          width="100%"
          justifyContent="center"
          alignItems="flex-start">
          <Typography variant="text" color={theme.colors.primaryDark}>
            Concepto
          </Typography>
        </StyledRow>
        <TextInput
          width="100%"
          height="56"
          placeholder="Añade descripción del pago"
          onChangeText={setDescription}
          maxLength={maxLength}
        />
        {description.length > 0 && (
          <StyledRow
            paddingLeft={10}
            marginBottom={10}
            width="100%"
            justifyContent="center"
            alignItems="flex-end">
            <Typography variant="placeholder">
              {`${description.length} / ${maxLength}`} caracteres
            </Typography>
          </StyledRow>
        )}
      </TextInputContainer>
      <ButtonContainer>
        <Button
          width="100%"
          height="50px"
          disabled={value.length === 0}
          onPress={() => console.log('Button Pressed')}>
          Continuar
        </Button>
      </ButtonContainer>
    </Section>
  );
};

export default Home;
