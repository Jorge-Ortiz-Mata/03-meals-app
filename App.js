import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Menu from './screens/Menu';
import Meals from './screens/Meals';
import Welcome from './screens/Welcome';
import Meal from './screens/Meal';
import Colors from './utilities/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{
        headerStyle: styles.header,
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.secondaryColor }
      }} >
        <Stack.Screen name='Welcome' component={Welcome} options={{
          title: 'Meals App',
        }} />
        <Stack.Screen name='Menu' component={Menu} options={{
          title: 'Categories',
        }} />
        <Stack.Screen name='Meals' component={Meals} />
        <Stack.Screen name='Meal'
          component={Meal}
          options={({route, navigation}) => {
            const title = route.params.meal.title
            return {
              title: title
            };
          }}
        />
      </Stack.Navigator>
      <StatusBar style='light' />
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
