import { StyleSheet, FlatList } from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import Category from './Category';

const CategoryList = () => {

  return(
      <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        renderItem={(categoryData) => {
          return <Category category={categoryData.item} />
        }}
        style={styles.categoryList}
        numColumns={2}
          />
  )
}

export default CategoryList;

const styles = StyleSheet.create({
  categoryList: {}
})
