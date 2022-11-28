import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Meal = () => {
  const route = useRoute();
  const meal = route.params.meal;

  return(
    <View>
      <View>
        <Image style={styles.image} source={{uri: meal.imageUrl}} />
      </View>
      <View style={styles.mealInfo}>
        <View>
          <Text>Name:</Text>
          <Text>{meal.title}</Text>
        </View>
      </View>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  }
})
