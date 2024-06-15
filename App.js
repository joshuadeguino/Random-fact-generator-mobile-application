import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import FactScreen from './FactScreen';
import CreatorScreen from './CreatorScreen'; // Import the new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fact" component={FactScreen} />
        <Stack.Screen name="Creator" component={CreatorScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
