// Conterners
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das screens... 
import HomeScreen from './view/HomeScreen'
import KmToMetros from './view/KmToMetros'
import KmhToMilhash from './view/KmhToMilhash'
import RealToDolar from './view/RealToDolar'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={HomeScreen}/>
        <Stack.Screen name="KmToMetros" component={KmToMetros} options={{ title: 'KmToMetros' }}/>
        <Stack.Screen name="KmhToMilhash" component={KmhToMilhash} options={{ title: 'KmhToMilhash' }}/>
        <Stack.Screen name="RealToDolar" component={RealToDolar} options={{ title: 'RealToDolar' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;