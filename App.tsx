import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {Home} from './src/screens';
import {Header} from './src/components';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/config/theme';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: Header,
            }}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
