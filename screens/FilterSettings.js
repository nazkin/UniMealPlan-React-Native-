import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtonFav';
import Colors from '../constants/colors';
import FilterSwitch from '../components/FilterSwitch';
/**
* @author
* @function FilterSettings
**/
const FilterSettings = (props) => {
  const {navigation} = props;

  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);

  const savingFilters = useCallback(()=>{
    const appliedValues = {
      isGluten: glutenFree,
      isVegan: vegan,
      isVegetarian: vegetarian,
      isLactose: lactoseFree
    };
    console.log(appliedValues);
  },[glutenFree, vegan, vegetarian, lactoseFree]);

  useEffect(()=> {
    navigation.setParams({
      save: savingFilters
    });
  },[savingFilters]);

  const changeGluten= ()=> {
    setGlutenFree(!glutenFree);
  }
  const changeVegan =()=> {
    setVegan(!vegan);
  }
  const changeVegetarian =()=> {
    setVegetarian(!vegetarian);
  }
  const changeLactose =()=> {
    setLactoseFree(!lactoseFree);
  }
 return(
  <View style={styles.container}>
    <FilterSwitch name="Gluten-Free" setFilter={changeGluten} current={glutenFree}/>
    <FilterSwitch name="Lactose-Free" setFilter={changeLactose} current={lactoseFree} />
    <FilterSwitch name="Vegan" setFilter={changeVegan} current={vegan} />
    <FilterSwitch name="Vegetarian" setFilter={changeVegetarian} current={vegetarian} />

  </View>
  )
}

FilterSettings["navigationOptions"] = (navData) => {
  return {
      title: "Search Filters",
      headerLeft: ()=> {
          return  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                      <Item title="Menu" iconName="ios-menu" onPress={()=>{
                          navData.navigation.toggleDrawer();
                      }}/>
                  </HeaderButtons>
      },
      headerRight: ()=> {
        return  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="FilterState" iconName="ios-checkbox-outline" onPress={navData.navigation.getParam('save')}/>
                </HeaderButtons>
    },

  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 30,
   backgroundColor: 'whitesmoke'
  },
})
export default FilterSettings