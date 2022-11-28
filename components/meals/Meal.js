import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native';
import Colors from '../../utilities/Colors';
import { useNavigation } from '@react-navigation/native';

const Meal = ({meal}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  function changeScreen(){
    navigation.navigate('Meal', {
      meal: meal
    })
  }

  return(
    <Pressable
      onPress={changeScreen}
      style={({pressed}) => pressed && {opacity: 0.6}
    }>
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
    </Pressable>
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
