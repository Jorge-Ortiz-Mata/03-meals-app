import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/meals/MealList';

const Meals = () => {

  return(
    <View style={styles.container}>
      <MealList />
    </View>
  )
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
