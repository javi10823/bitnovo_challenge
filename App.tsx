import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {
  Home,
  SharePayment,
  SelectBadge,
  SelectPhoneCode,
  ShareQr,
} from './src/screens';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/config/theme';
import {ThemeProvider} from 'styled-components';
import './services/i18next';

export type ScreenNames = [
  'home',
  'selectBadge',
  'sharePayment',
  'selectPhoneCode',
  'shareQr',
];
export type RootStackParamList = Record<ScreenNames[number], any>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export const useAppNavigation = useNavigation<StackNavigation>;

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="selectBadge" component={SelectBadge} />
              <Stack.Screen name="sharePayment" component={SharePayment} />
              <Stack.Screen
                name="selectPhoneCode"
                component={SelectPhoneCode}
              />
              <Stack.Screen name="shareQr" component={ShareQr} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </PaperProvider>
  );
}

export default App;
