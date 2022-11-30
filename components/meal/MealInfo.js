import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../utilities/Colors';

const MealInfo = ({meal}) => {

  return(
    <View>
      <View>
        <Text style={[styles.generalTitle, styles.title]}>{meal.title}</Text>
      </View>
      <View>
        <Text style={{textAlign: 'center', fontWeight: '700'}}>Cost: {meal.affordability}</Text>
        <Text style={{textAlign: 'center', fontWeight: '700'}}>Difficult: {meal.complexity}</Text>
        <Text style={{textAlign: 'center', fontWeight: '700'}}>Duration: {meal.duration} min</Text>
      </View>
      <View>
        <Text style={[styles.generalTitle, styles.subtitle]}>Ingredients</Text>
        {
          meal.ingredients.map((ingredient, index) => {
            return <Text key={index} style={styles.ingredient}>
              * {ingredient}
            </Text>
          })
        }
      </View>
      <View>
        <Text style={[styles.generalTitle, styles.subtitle]}>Steps</Text>
        {
          meal.steps.map((step, index) => {
            return <Text key={index} style={styles.ingredient}>
              {index + 1}. - {step}
            </Text>
          })
        }
      </View>
    </View>
  )
}

export default MealInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  generalTitle: {
    borderBottomWidth: 2,
    marginBottom: 15,
    textAlign: 'center',
    paddingVertical: 5
  },
  title:{
    fontWeight: '900',
    fontSize: 25,
  },
  subtitle: {
    fontWeight: '900',
    fontSize: 18,
    marginTop: 20
  },
  ingredient: {
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    backgroundColor: Colors.secondaryColor,
    fontWeight: '700'
  }
})
