import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Menu from './screens/Menu';
import Meals from './screens/Meals';
import Welcome from './screens/Welcome';
import Meal from './screens/Meal';
import Favorites from './screens/Favorites';
import Colors from './utilities/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator screenOptions={{
    headerStyle: styles.header,
    headerTintColor: Colors.white,
    sceneContainerStyle: { backgroundColor: Colors.secondaryColor }
  }}>
    <Drawer.Screen name='WelcomeDrawer' component={Welcome} options={{title: 'Welcome'}} />
    <Drawer.Screen name='MealsCategories' component={Menu} options={{title: 'All Categories'}} />
    <Drawer.Screen name='Favorites' component={Favorites} />
  </Drawer.Navigator> ;
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{
        headerStyle: styles.header,
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.secondaryColor }
      }} >
        <Stack.Screen name='Welcome' component={DrawerNavigation} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Menu' component={DrawerNavigation} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Meals' component={Meals} />
        <Stack.Screen name='Meal' component={Meal} />
      </Stack.Navigator>
      <StatusBar style='dark  ' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.primaryColor,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  imageOpacity: {
    opacity: 0.3
  }
});
