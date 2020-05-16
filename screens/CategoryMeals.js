import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {CATEGORIES} from '../data/dummy'
import Colors from '../constants/colors'

const CategoryMeals = (props) => {
const titleId = props.navigation.getParam('categoryId');
const selectedCategory = CATEGORIES.find(cat => cat.id === titleId)

 return(
  <View style={styles.container}> 
    <Button title="View Meal" onPress={()=> props.navigation.navigate('DetailedMeal')}/>
    <Text style={styles.title}>{selectedCategory.title}</Text>
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'space-between',
   alignItems: 'center',
  }, 
  title: {
      fontSize: 25, 
      width: '100%', 
      backgroundColor: Colors.accentColor, 
      color: 'white',
      padding: 5, 
      textAlign: 'center'
  }
})
export default CategoryMeals