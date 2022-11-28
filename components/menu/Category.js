import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Category = ({category}) => {
  const navigation = useNavigation();

  function helloWorld(){
    navigation.navigate('Meals')
  }

  return(
    <Pressable
      onPress={helloWorld}
      style={({pressed}) =>
        pressed
          ? [styles.btn, {opacity: 0.6, backgroundColor: category.color}]
          : [styles.btn, {backgroundColor: category.color}]
    }>
      <Text style={styles.categoryItem}>{category.title}</Text>
    </Pressable>
  )
}

export default Category;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 100,
    margin: 15,
    padding: 25,
    borderRadius: 10,
    elevation: 8,
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  categoryItem: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18
  }
})
