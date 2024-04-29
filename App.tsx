import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {Home, SelectBadge} from './src/screens';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/config/theme';

export type ScreenNames = ['home', 'selectBadge']; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export const useAppNavigation = useNavigation<StackNavigation>;

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="selectBadge" component={SelectBadge} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
