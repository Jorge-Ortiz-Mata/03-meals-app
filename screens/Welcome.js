
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Colors from '../utilities/Colors';

const Welcome = ({navigation}) => {

  function startApp(){
    navigation.navigate('Menu')
  }

  return (
    <View style={styles.container}>
      <Text>Welome Screen</Text>
      <Pressable
        onPress={startApp}
        style={styles.btn}
      >
        <Text style={[{color: Colors.white}, {fontWeight: 'bold'}, {fontSize: 16}]}>Start</Text>
      </Pressable>
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
  btn: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.primaryColor,
    marginVertical: 20
  }
});
