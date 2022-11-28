import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Meal = ({meal}) => {
  const {width, height} = useWindowDimensions();

  return(
    <View style={[styles.container, {marginHorizontal: width < 400 ? 20 : 60}]}>
      <View>
        <Image style={styles.image} source={{uri: meal.imageUrl}} />
      </View>
      <View style={styles.mealInfo}>
        <View>
          <Text>Name:</Text>
          <Text>{meal.title}</Text>
        </View>
        <View>
          <Text>Complexity:</Text>
          <Text>{meal.complexity.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  )
}

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 20,
    elevation: 10
  },
  image: {
    width: 110,
    height: 125,
  },
  mealInfo:{
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    padding: 5
  }
})
