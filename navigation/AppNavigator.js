import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDeatails from '../screens/MealDetail'
import Colors from '../constants/colors'
const NavigationStack = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,

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
}
)

export default createAppContainer(NavigationStack);