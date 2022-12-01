import { StyleSheet, ScrollView, View, Image, Pressable, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MealInfo from '../components/meal/MealInfo';
import { useContext, useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../store/context/favorites-context';

const Meal = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const route = useRoute();
  const meal = route.params.meal;
  const navigation = useNavigation();

  const mealIsFavorite = favoriteMealsContext.ids.includes(meal.id);

  function addToFavorites(){
    if(mealIsFavorite){
      favoriteMealsContext.removeFavorite(meal.id)
    } else {
      favoriteMealsContext.addFavorite(meal.id)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <Pressable onPress={addToFavorites}>
          <AntDesign name={mealIsFavorite ? 'heart' : 'hearto'} size={24} color='#fff' />
        </Pressable>
      }
    })
  }, [navigation, addToFavorites]);

  return(
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{uri: meal.imageUrl}}
          />
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
