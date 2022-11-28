import { StyleSheet, Text, View } from 'react-native';

const Meal = ({meal}) => {

  return(
    <View>
      <View>
        <Text>Name:</Text>
        <Text>{meal.title}</Text>
      </View>
      <View>
        <Text>Complexity:</Text>
        <Text>{meal.complexity}</Text>
      </View>
      <View>
        <Text>Duration:</Text>
        <Text>{meal.duration} min.</Text>
      </View>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({})
