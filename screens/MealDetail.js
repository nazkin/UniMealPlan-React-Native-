import React, {useCallback, useEffect} from 'react';
import { View, Text, StyleSheet, Image , ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import FavoriteBtn from '../components/HeaderButtonFav';
import Colors from '../constants/colors';
import {toggleFavorite } from '../store/actions/mealsActions';

/**
* @author
* @function MealDetail
**/


const MealDetail = (props) => {

const displayedMeals = useSelector(state => state.meals.meals);
const idMeal = props.navigation.getParam('mealId');
const mealObject = displayedMeals.find(meal => meal.id === idMeal);
//Checks if the detailed meal has been favorited by the user
const isFavorited = useSelector(state => {
  return state.meals.favoriteMeals.some(meal => meal.id === idMeal)
})

const dispatch = useDispatch()

const toggleFavoriteMeal = useCallback(() => {
  dispatch(toggleFavorite(idMeal));
}, [idMeal])

useEffect(()=> {
  props.navigation.setParams({toggleFavorite: toggleFavoriteMeal});
}, [toggleFavoriteMeal]);
//Passing the favorited status of the displayed meal to the header element
useEffect(()=> {
  props.navigation.setParams({isFaved: isFavorited})
}, [isFavorited])

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
  </ScrollView> 
  )
}

MealDetail['navigationOptions'] = (paramData)=> {
  const isMealFavorite = paramData.navigation.getParam('isFaved');
  return {
    title: paramData.navigation.getParam('mealName'),
    headerRight: ()=>  {return (<HeaderButtons HeaderButtonComponent={FavoriteBtn}>
                        <Item
                         title="Favorite"
                         iconName={isMealFavorite ?"ios-star": "ios-star-outline" }
                         onPress={paramData.navigation.getParam('toggleFavorite')} />
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