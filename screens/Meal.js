import { StyleSheet, ScrollView, View, Image, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MealInfo from '../components/meal/MealInfo';
import { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Meal = () => {
  const route = useRoute();
  const meal = route.params.meal;
  const navigation = useNavigation();

  function addToFavourites(){
    console.log('Adding...')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <Pressable onPress={addToFavourites}><AntDesign name="heart" size={24} color='#fff' /></Pressable>
      }
    })
  }, [navigation, meal]);

  return(
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: meal.imageUrl}} />
        </View>
        <View style={styles.mealInfo}>
          <MealInfo meal={meal} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    borderRadius: 20,
    width: 200,
    height: 200,
  },
  mealInfo: {
    marginVertical: 20,
    width: '80%'
  }
})
