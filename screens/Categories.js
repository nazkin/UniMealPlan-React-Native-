import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import {CATEGORIES} from '../data/dummy'
import colors from '../constants/colors'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtonFav';
const Categories = (props) => {


const { gridItem } = styles
const renderGridElement = (el)=> {
    return  <TouchableOpacity
             
            style={gridItem}
            onPress={()=> props.navigation.navigate({routeName: 'Meals', params: {
                categoryId: el.item.id,
                categoryTitle: el.item.title
            }})}>
                <View style={{...styles.eachCategory, ...{backgroundColor: el.item.color}}}>
                    <Text style={styles.categoryName}>{el.item.title}</Text>
                </View>
            </TouchableOpacity>

}

 return(
        <FlatList  data={CATEGORIES} renderItem={renderGridElement} numColumns={2}/>
  )
}
Categories["navigationOptions"] = (navData) => {
    return {
        title: "Select Category",
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

  gridItem: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20, 
    height: 150, 
    backgroundColor: 'whitesmoke'
  },
  eachCategory: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      borderRadius: 10, 
      elevation: 3,
      paddingVertical: 10
  }, 
  categoryName: {
      color: '#090f0f',
      fontFamily: 'open-sans-bold',
      fontSize: 16, 
      width: '80%',
      maxWidth: '100%',
      backgroundColor: 'whitesmoke',
      padding: 5,
  }
})


export default Categories