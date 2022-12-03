import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import Meal from '../components/meals/Meal';
import { MEALS } from '../data/dummy-data';

const Favorites = () => {
  const favoriteMealsContext = useContext(FavoritesContext)
  const displayedMeals = []

  for(let i = 0; i < favoriteMealsContext.ids.length; i++){
    for(let j = 0; j < MEALS.length; j++){
      if(favoriteMealsContext.ids[i] == MEALS[j].id){
        displayedMeals.push(MEALS[j])
      }
    }
  }

  return(
    <>
      <Text style={styles.title}>Favorites</Text>
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
    fontSize: 30,
    marginTop: 15,
    marginBottom: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
