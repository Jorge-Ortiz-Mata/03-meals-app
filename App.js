import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from './screens/Menu';
import Meals from './screens/Meals';
import Welcome from './screens/Welcome';
import Meal from './screens/Meal';
import Colors from './utilities/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = require('./assets/images/food.png')
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={styles.container}>
      <ImageBackground source={image} resizeMode='contain' style={styles.imageBack} imageStyle={styles.imageOpacity} >
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
            <Stack.Screen name='Meals' component={Meals} options={{
              title: 'Meals',
            }} />
            <Stack.Screen name='Meal' component={Meal} options={{
              title: 'Meal',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='light' />
      </ImageBackground>
    </LinearGradient>
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
