import { StyleSheet, View } from 'react-native';
import CategoryList from '../components/menu/CategoryList';

const Menu = () => {

  return(
    <View style={styles.main}>
      <View>
        <CategoryList />
      </View>
    </View>
  )
}

export default Menu;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  }
})
