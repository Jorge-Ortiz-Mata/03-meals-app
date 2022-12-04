import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import Meal from '../components/meals/Meal';
import { MEALS } from '../data/dummy-data';

const Favorites = () => {
  const favoriteMealsContext = useContext(FavoritesContext)
  const displayedMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id))

  return(
    <>
      <Text style={styles.title}>My Favorites Meals</Text>
      <Text style={{textAlign: 'center', marginBottom: 15}}>2022 @ Made by Jorge Ortiz</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={({item}) => {
          return <Meal meal={item} />
        }}
      />
    </>
  )
}

export default Favorites;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
