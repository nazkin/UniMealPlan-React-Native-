import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from '../data/dummy'
import FavoriteBtn from '../components/HeaderButtonFav'
/**
* @author
* @function MealDetail
**/
const MealDetail = (props) => {


const idMeal = props.navigation.getParam('mealId');
const mealObject = MEALS.find(meal => meal.id === idMeal);
 return(
  <View style={styles.container}>
    <Text>{mealObject.title}</Text>
    <Button title="Back to Categories" onPress={()=> props.navigation.popToTop()} />
  </View>
  )
}

MealDetail['navigationOptions'] = (paramData)=> {
  return {
    title: paramData.navigation.getParam('mealName'),
    headerRight: ()=>  <HeaderButtons HeaderButtonComponent={FavoriteBtn}>
                        <Item
                         title="Favorite"
                         iconName="ios-star-outline"
                         onPress={()=> console.log('Favorite')} />
                       </HeaderButtons>
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default MealDetail