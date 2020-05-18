import React from 'react'
import { View, Text, StyleSheet, Button, Image , ScrollView} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from '../data/dummy'
import FavoriteBtn from '../components/HeaderButtonFav'
import Colors from '../constants/colors'
/**
* @author
* @function MealDetail
**/
const MealDetail = (props) => {


const idMeal = props.navigation.getParam('mealId');
const mealObject = MEALS.find(meal => meal.id === idMeal);
const ingredients = mealObject.ingredients.map(ing=> {
  return (
    <Text style={styles.eachIng} key={ing}>
      {ing}
    </Text>
  )
})
const steps = mealObject.steps.map(step=> {
  return (
    <Text style={styles.eachStep} key={step}>
      {step}
    </Text>
  )
})
 return(
  <ScrollView style={styles.container}>
    <Image source={{uri: mealObject.imageUrl}} style={{width: '100%', height: 200}}/>
    <View style={styles.rowFirst}>
      <View style={styles.ingredientsCol}>
        <Text style={styles.ingTitle}>Ingredients</Text>
        {ingredients}
      </View>
      <View style={styles.infoCol}>
        <Text style={styles.ingTitle}>General</Text>
        <Text style={styles.infoTxt}>{mealObject.duration} min</Text>
        <Text style={styles.infoTxt}>{mealObject.affordability}</Text>
        <Text style={styles.infoTxt}>{mealObject.complexity}</Text>
      </View>
    </View>
    <Text style={styles.ingTitle}>Steps</Text>
    <View style={styles.stepsView}>
      {steps}
    </View>
    {/* <Text>{mealObject.title}</Text>
    <Button title="Back to Categories" onPress={()=> props.navigation.popToTop()} /> */}
  </ScrollView> 
  )
}

MealDetail['navigationOptions'] = (paramData)=> {
  return {
    title: paramData.navigation.getParam('mealName'),
    headerRight: ()=>  {return (<HeaderButtons HeaderButtonComponent={FavoriteBtn}>
                        <Item
                         title="Favorite"
                         iconName="ios-star-outline"
                         onPress={()=> console.log('Favorite')} />
                       </HeaderButtons>)}
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingHorizontal: 15,
   backgroundColor: 'whitesmoke'
  }, 
  rowFirst:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    minHeight: 100,

  },
  ingredientsCol:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%',
    backgroundColor: Colors.accentColor,


  },
  infoCol:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#bdbdbd'
  },
  ingTitle:{
    width: '100%',
    color: 'white',
    padding: 6,
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: Colors.primaryColor
  },
  eachIng: {
    marginLeft: 10,
    marginVertical: 5,
    fontFamily: 'open-sans',
    color: 'white'
  },
  infoTxt:{
    fontFamily: 'open-sans',
    fontSize: 18,

  }, 
  stepsView: {
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'black'

  },
  eachStep:{
    margin: 5,
    color: Colors.accentColor,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    
  }
})
export default MealDetail