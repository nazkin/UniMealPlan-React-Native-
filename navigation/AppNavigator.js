import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDeatails from '../screens/MealDetail';
import FavoritesScreen from '../screens/Favorites';
import Colors from '../constants/colors';

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

const MealsTabNavigator = createBottomTabNavigator({
    Meals:{screen: NavigationStack, navigationOptions:{
        tabBarIcon: (tabInfo)=> {
            return <Ionicons name="ios-cafe" size={23} color={tabInfo.tintColor}/>
        }
    }},
    Favorites: {screen: FavoritesScreen,navigationOptions:{
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

export default createAppContainer(MealsTabNavigator);