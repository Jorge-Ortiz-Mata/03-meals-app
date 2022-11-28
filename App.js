import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from './screens/Menu';
import Meals from './screens/Meals';
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
          <Stack.Navigator>
            <Stack.Screen name='Menu' component={Menu} />
            <Stack.Screen name='Meals' component={Meals} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  imageOpacity: {
    opacity: 0.3
  }
});
