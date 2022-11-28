import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data'

const Meals = () => {

  return(
    <View style={styles.container}>
      <Text>My meals</Text>
    </View>
  )
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
