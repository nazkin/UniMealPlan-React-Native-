import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import {CATEGORIES, MEALS} from '../data/dummy'
import Colors from '../constants/colors'


const CategoryMeals = (props) => {
const titleId = props.navigation.getParam('categoryId');

const categoryMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(titleId) >= 0)

const mealSelectionHandler = (id, name) => {
  props.navigation.navigate({routeName: 'DetailedMeal',params: {
    mealId: id,
    mealName: name
  }})
}

const renderMealsHandler = (mealsData) => {
  return (
    <TouchableOpacity style={styles.mealView} onPress={()=> mealSelectionHandler(mealsData.item.id, mealsData.item.title)}>
        <View style={styles.headerSection}>
          <ImageBackground source={{uri: mealsData.item.imageUrl}} style={styles.foodImg}>
            <Text style={styles.mealTitle}>{mealsData.item.title}</Text>
          </ImageBackground>
        </View>
        <View style={styles.footerSection}>
          <Text>{mealsData.item.duration}m</Text>
          <Text>{mealsData.item.complexity}</Text>
          <Text>{mealsData.item.affordability}</Text>
        </View>
    </TouchableOpacity>

  )
}
 return(
  <View style={styles.container}> 
    {/* <Button title="View Meal" onPress={()=> props.navigation.navigate('DetailedMeal')}/> */}
    <FlatList style={{width: '95%'}} data={categoryMeals} renderItem={renderMealsHandler} numColumns={1}/>
  </View>
  )
}
CategoryMeals["navigationOptions"] = (paramData) => {
  return {
    title: paramData.navigation.getParam('categoryTitle')
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center',
   paddingVertical: 10
  },
  mealView:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 180,
    backgroundColor: 'silver', 
    marginVertical: 7
  },
  headerSection: {
    flexDirection: 'row',
    height: '80%',
    width: '100%'
  },
  footerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '20%',
    backgroundColor: '#bdbdbd',
    width: '100%',
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 3
  },
  foodImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealTitle: {
    color: 'linen',
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    width: '100%',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.8)',
    // borderBottomColor: Colors.primaryColor,
    // borderBottomWidth: 2,
    borderTopColor: Colors.primaryColor,
    borderTopWidth: 2
    
    
    
  }
})
export default CategoryMeals