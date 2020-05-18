import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDeatails from '../screens/MealDetail';
import FavoritesScreen from '../screens/Favorites';
import FilterScreen from '../screens/FilterSettings';
import Colors from '../constants/colors';

//Stack Navigation for the major screens of the application
const NavigationStack = createStackNavigator({
    Categories: {
        screen: Categories,

    },
    Meals: {
        screen: CategoryMeals
    },
    DetailedMeal: {
        screen: MealDeatails
    }

},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.accentColor
        }, 
        headerTintColor:'#fff'
        
    }
});
//Stack Navigation that controls navigation between the Favorites screen and the Detailed meal screen only. separate from the main navigationStack
const FavoritesStackNav = createStackNavigator({
    Favorites: FavoritesScreen,
    DetailedMeal: MealDeatails
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.accentColor
        }, 
        headerTintColor:'#fff'
        
    }
});
//Stack navigator for Filter screen in order for the header to be displayed at the top
const FilterStackNav = createStackNavigator({
    Filters: FilterScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.accentColor
        }, 
        headerTintColor:'#fff'
        
    }
})
//Tab Navigation to switch between the meal search functionality and Favorites
const MealsTabNavigator = createBottomTabNavigator({
    Meals:{screen: NavigationStack, navigationOptions:{
        tabBarIcon: (tabInfo)=> {
            return <Ionicons name="ios-cafe" size={23} color={tabInfo.tintColor}/>
        }
    }},
    Favorites: {screen: FavoritesStackNav ,navigationOptions:{
        tabBarIcon: (tabInfo)=> {
            return <Ionicons name="ios-heart" size={23} color={tabInfo.tintColor} />
        }
    }}
}, {
    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "black",
        activeBackgroundColor: '#d3d3d3',
        inactiveBackgroundColor: Colors.accentColor,
        activeBackgroundColor:Colors.accentColor,
        labelStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 12
        }
    }
});

const CoreDrawerNavigator = createDrawerNavigator({
    Favorites: {screen:MealsTabNavigator, navigationOptions: {
        title: 'Meals Home'
    }},
    Filters: FilterStackNav
},
{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})


export default createAppContainer(CoreDrawerNavigator);