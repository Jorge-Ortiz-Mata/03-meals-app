import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from './screens/Menu';
import Colors from './utilities/Colors';

const image = require('./assets/images/food.png')

export default function App() {

  return (
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={styles.container}>
      <ImageBackground source={image} resizeMode='contain' style={styles.imageBack} imageStyle={styles.imageOpacity} >
        <Menu />
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
