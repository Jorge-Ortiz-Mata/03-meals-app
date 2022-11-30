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
    <View>
      <Pressable
        onPress={changeScreen}
        style={({pressed}) =>
          pressed ? [styles.container, {opacity: 0.5}] : [styles.container]
        }
      >
          <View>
            <Image style={styles.image} source={{uri: meal.imageUrl}} />
          </View>
          <View style={styles.mealInfo}>
            <View>
              <Text style={styles.title}>{meal.title}</Text>
              <Text>Difficulty: {meal.complexity}</Text>
              <Text>Price: {meal.affordability}</Text>
            </View>
          </View>
      </Pressable>
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
    marginHorizontal: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  image: {
    width: 110,
    height: 125,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  mealInfo:{
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
    overflow: 'hidden'
  },
  title: {
    fontWeight: '900',
    marginBottom: 5
  }
})
