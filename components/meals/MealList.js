import { StyleSheet, FlatList, View } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';
import Meal from './Meal';
import { useLayoutEffect } from 'react';

const MealList = () => {
  const route = useRoute();
  const category = route.params.category;
  const navigation = useNavigation();

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(category.id) >= 0;
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title
    })
  }, [navigation]);

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
