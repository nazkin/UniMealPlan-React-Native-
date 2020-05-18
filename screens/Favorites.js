import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import {MEALS} from "../data/dummy"
import Colors from '../constants/colors'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtonFav';
/**
* @author
* @function Favorites
**/
const Favorites = (props) => {

const FavMeals = MEALS.filter(meal=> meal.id === 'm1' || meal.id === 'm3');

const viewMealDetail = (id, name)=> {
  props.navigation.navigate({routeName: 'DetailedMeal',params: {
    mealId: id,
    mealName: name
  }})
}

const renderFavorites = (favs) => {
  return  <TouchableOpacity style={styles.favItemView} onPress={()=>viewMealDetail(favs.item.id ,favs.item.title)}>
            <View style={styles.topRow}>
              <ImageBackground source={{uri: favs.item.imageUrl}} style={styles.imgStyle}>
                <Text style={styles.favItemTitle}>{favs.item.title}</Text>
              </ImageBackground>
              
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.favDescriptions}>{favs.item.duration}m</Text>
              <Text style={styles.favDescriptions}>{favs.item.complexity}</Text>
              <Text style={styles.favDescriptions}>{favs.item.affordability}</Text>
            </View>
            
          </TouchableOpacity>
}

 return(
  <View style={styles.container}>
    <FlatList style={{width: '95%'}} data={FavMeals} renderItem={renderFavorites} numColumns={1}/>
  </View>
  )
}
Favorites["navigationOptions"] = (navData) => {
  return {
      title: "Favorite Meals",
      headerLeft: ()=> {
          return  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                      <Item title="Menu" iconName="ios-menu" onPress={()=>{
                        navData.navigation.toggleDrawer();
                      }}/>
                  </HeaderButtons>
      }
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'whitesmoke'
  },
  favItemView:{
    width: '100%',
    height: 180,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    marginVertical: 7,

  },
  favItemTitle: {
    width: '100%',
    padding: 5,
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    borderTopColor: Colors.primaryColor,
    borderTopWidth: 3
  }, 
  topRow:{
    flexDirection: 'row',
    height: '80%',
    width: '100%',

  },
  bottomRow: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor:'#bdbdbd',
    alignItems: 'center'
  },
  imgStyle:{
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',

  },
  favDescriptions:{
    fontFamily: 'open-sans-bold',
    color: 'white',
    fontSize: 16,
    backgroundColor: Colors.accentColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  }
})
export default Favorites