import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryList from '../components/menu/CategoryList';

const Menu = ({navigation}) => {

  return(
    <View style={styles.main}>
      <View>
        <CategoryList navigation={navigation} />
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
