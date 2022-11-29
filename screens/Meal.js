import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
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
        return <Pressable onPress={addToFavourites}><AntDesign name="hearto" size={24} color="red" /></Pressable>
      }
    })
  }, [navigation, meal]);

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
