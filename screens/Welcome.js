import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../utilities/Colors';

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/01.png')} style={styles.image} />
      <Text style={{fontWeight: 'bold', fontSize: 30, color: Colors.primaryColor}}>The Green Kitchen</Text>
      <Text style={{textAlign: 'center', padding: 20, color: Colors.primaryColor, fontWeight: '700'}}>You'll find a lot of meals with their own description, ingredients and preparation.</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250,
  }
});
