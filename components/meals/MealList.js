import { StyleSheet, FlatList, View } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { useRoute } from '@react-navigation/native';
import Meal from './Meal';

const MealList = () => {
  const route = useRoute();
  const categoryID = route.params.id;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  })

  return(
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={(mealData) => {
          return <Meal meal={mealData.item} />
        }}
      />
    </View>
  )
}

export default MealList;

const styles = StyleSheet.create({})
