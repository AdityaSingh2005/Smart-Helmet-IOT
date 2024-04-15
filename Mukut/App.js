import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from './app/Screens/IntroScreen';
import TabNav from './app/Navigation/TabNavigation';
import Form from './app/Screens/FormScreen';
import Login from './app/Screens/GoogleScreen';
import Home from './app/Screens/HomeScreen';
import Profile from './app/Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          options={{ headerShown: false }}
          component={Intro}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNav}
        />
        <Stack.Screen
          name="Form"
          options={{ headerShown: false }}
          component={Form}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

